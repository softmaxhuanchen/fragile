import pytest  # noqa: F401

from fragile.core.models import RandomContinous, RandomDiscrete
from fragile.core.states import States
from fragile.optimize.models import RandomNormal


def create_model(name="discrete"):
    if name == "discrete":
        return lambda: RandomDiscrete(n_actions=10)
    elif name == "continuous":
        return lambda: RandomContinous(low=-1, high=1, shape=(3,))
    elif name == "random_normal":
        return lambda: RandomNormal(low=-1, high=1, shape=(3,))
    raise ValueError("Invalid param `name`.")


@pytest.fixture(scope="module")
def model_fixture(request):
    return create_model(request.param)()


def create_model_states(model, batch_size: int = 10):
    return States(batch_size=batch_size, state_dict=model.get_params_dict())


class TestModel:
    model_fixture_params = ["discrete", "continuous", "random_normal"]

    @pytest.mark.parametrize("model_fixture", model_fixture_params, indirect=True)
    def test_get_params_dir(self, model_fixture):
        params_dict = model_fixture.get_params_dict()
        assert isinstance(params_dict, dict)
        for k, v in params_dict.items():
            assert isinstance(k, str)
            assert isinstance(v, dict)
            for ki, vi in v.items():
                assert isinstance(ki, str)

    @pytest.mark.parametrize("model_fixture", model_fixture_params, indirect=True)
    def test_reset(self, model_fixture):
        n_walkers = 7
        states = model_fixture.reset(batch_size=n_walkers)
        assert isinstance(states, model_fixture.STATE_CLASS)
        model_states = create_model_states(model=model_fixture, batch_size=n_walkers)
        states = model_fixture.reset(batch_size=n_walkers, model_states=model_states)
        assert isinstance(states, model_fixture.STATE_CLASS)

        assert len(model_states.actions) == n_walkers

    @pytest.mark.parametrize("model_fixture", model_fixture_params, indirect=True)
    def test_predict(self, model_fixture):
        n_walkers = 7
        states = create_model_states(model=model_fixture, batch_size=n_walkers)
        updated_states = model_fixture.predict(model_states=states, env_states=states)
        assert isinstance(updated_states, model_fixture.STATE_CLASS)
        assert len(updated_states) == n_walkers
        updated_states = model_fixture.predict(
            model_states=states, env_states=states, batch_size=n_walkers
        )
        assert isinstance(updated_states, model_fixture.STATE_CLASS)
        assert len(updated_states) == n_walkers
