Search.setIndex({docnames:["index","module_docs/atari","module_docs/core","module_docs/optimize","resources/architecture","resources/color_roles","resources/function_minimization","resources/getting_started"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","module_docs/atari.rst","module_docs/core.rst","module_docs/optimize.rst","resources/architecture.rst","resources/color_roles.rst","resources/function_minimization.rst","resources/getting_started.rst"],objects:{"fragile.atari.env":{AtariEnv:[1,0,1,""]},"fragile.atari.env.AtariEnv":{STATE_CLASS:[1,1,1,""],get_params_dict:[1,2,1,""],reset:[1,2,1,""],step:[1,2,1,""]},"fragile.atari.walkers":{AtariWalkers:[1,0,1,""],MontezumaWalkers:[1,0,1,""]},"fragile.atari.walkers.AtariWalkers":{__init__:[1,2,1,""],calculate_end_condition:[1,2,1,""]},"fragile.atari.walkers.MontezumaWalkers":{calculate_distances:[1,2,1,""]},"fragile.core.base_classes":{BaseEnvironment:[2,0,1,""],BaseModel:[2,0,1,""],BaseStateTree:[2,0,1,""],BaseSwarm:[2,0,1,""],BaseWalkers:[2,0,1,""],BaseWrapper:[2,0,1,""]},"fragile.core.base_classes.BaseEnvironment":{STATE_CLASS:[2,1,1,""],get_params_dict:[2,2,1,""],reset:[2,2,1,""],step:[2,2,1,""]},"fragile.core.base_classes.BaseModel":{STATE_CLASS:[2,1,1,""],get_params_dict:[2,2,1,""],predict:[2,2,1,""],reset:[2,2,1,""]},"fragile.core.base_classes.BaseSwarm":{__init__:[2,2,1,""],env:[2,2,1,""],init_swarm:[2,2,1,""],model:[2,2,1,""],reset:[2,2,1,""],run_swarm:[2,2,1,""],step_walkers:[2,2,1,""],walkers:[2,2,1,""]},"fragile.core.base_classes.BaseWalkers":{STATE_CLASS:[2,1,1,""],__init__:[2,2,1,""],__len__:[2,2,1,""],balance:[2,2,1,""],calculate_distances:[2,2,1,""],calculate_end_condition:[2,2,1,""],calculate_virtual_reward:[2,2,1,""],clone_walkers:[2,2,1,""],env_states:[2,2,1,""],get_alive_compas:[2,2,1,""],get_params_dict:[2,2,1,""],model_states:[2,2,1,""],n:[2,2,1,""],reset:[2,2,1,""],states:[2,2,1,""],update_states:[2,2,1,""]},"fragile.core.bounds":{Bounds:[2,0,1,""]},"fragile.core.bounds.Bounds":{__init__:[2,2,1,""],clip:[2,2,1,""],from_array:[2,2,1,""],from_tuples:[2,2,1,""],get_scaled_intervals:[2,2,1,""],points_in_bounds:[2,2,1,""],safe_margin:[2,2,1,""],shape:[2,2,1,""],to_tuples:[2,2,1,""]},"fragile.core.env":{DiscreteEnv:[2,0,1,""],Environment:[2,0,1,""]},"fragile.core.env.DiscreteEnv":{__init__:[2,2,1,""],n_actions:[2,2,1,""],reset:[2,2,1,""],step:[2,2,1,""]},"fragile.core.env.Environment":{__init__:[2,2,1,""],get_params_dict:[2,2,1,""],observs_shape:[2,2,1,""],states_from_data:[2,2,1,""],states_shape:[2,2,1,""]},"fragile.core.models":{BinarySwap:[2,0,1,""],ContinuousModel:[2,0,1,""],ContinuousUniform:[2,0,1,""],DiscreteModel:[2,0,1,""],DiscreteUniform:[2,0,1,""],Model:[2,0,1,""],_DtModel:[2,0,1,""]},"fragile.core.models.BinarySwap":{__init__:[2,2,1,""],get_params_dict:[2,2,1,""],sample:[2,2,1,""]},"fragile.core.models.ContinuousModel":{__init__:[2,2,1,""],get_params_dict:[2,2,1,""],n_dims:[2,2,1,""],shape:[2,2,1,""]},"fragile.core.models.ContinuousUniform":{sample:[2,2,1,""]},"fragile.core.models.DiscreteModel":{__init__:[2,2,1,""],get_params_dict:[2,2,1,""],n_actions:[2,2,1,""]},"fragile.core.models.DiscreteUniform":{sample:[2,2,1,""]},"fragile.core.models.Model":{__init__:[2,2,1,""],add_critic_params:[2,2,1,""],predict:[2,2,1,""],reset:[2,2,1,""],sample:[2,2,1,""],update_states_with_critic:[2,2,1,""]},"fragile.core.models._DtModel":{get_params_dict:[2,2,1,""],update_states_with_critic:[2,2,1,""]},"fragile.core.states":{States:[2,0,1,""],StatesEnv:[2,0,1,""],StatesModel:[2,0,1,""],StatesWalkers:[2,0,1,""]},"fragile.core.states.States":{__getitem__:[2,2,1,""],__init__:[2,2,1,""],__len__:[2,2,1,""],__setitem__:[2,2,1,""],clone:[2,2,1,""],concat_states:[2,2,1,""],copy:[2,2,1,""],get:[2,2,1,""],get_params_dict:[2,2,1,""],group_hash:[2,2,1,""],hash_values:[2,2,1,""],items:[2,2,1,""],iteritems:[2,2,1,""],itervals:[2,2,1,""],keys:[2,2,1,""],n:[2,2,1,""],params_to_arrays:[2,2,1,""],split_states:[2,2,1,""],update:[2,2,1,""],vals:[2,2,1,""]},"fragile.core.states.StatesEnv":{__init__:[2,2,1,""],get_params_dict:[2,2,1,""]},"fragile.core.states.StatesModel":{__init__:[2,2,1,""],get_params_dict:[2,2,1,""]},"fragile.core.states.StatesWalkers":{__init__:[2,2,1,""],best_found:[2,2,1,""],best_reward_found:[2,2,1,""],clone:[2,2,1,""],get_params_dict:[2,2,1,""],reset:[2,2,1,""]},"fragile.core.swarm":{Swarm:[2,0,1,""]},"fragile.core.swarm.Swarm":{__init__:[2,2,1,""],balance_and_prune:[2,2,1,""],calculate_end_condition:[2,2,1,""],env:[2,2,1,""],init_swarm:[2,2,1,""],model:[2,2,1,""],prune_tree:[2,2,1,""],reset:[2,2,1,""],run_step:[2,2,1,""],run_swarm:[2,2,1,""],step_and_update_best:[2,2,1,""],step_walkers:[2,2,1,""],update_tree:[2,2,1,""],walkers:[2,2,1,""]},"fragile.core.tree":{HistoryTree:[2,0,1,""]},"fragile.core.tree.HistoryTree":{prune_tree:[2,2,1,""]},"fragile.core.walkers":{Walkers:[2,0,1,""]},"fragile.core.walkers.Walkers":{__init__:[2,2,1,""],balance:[2,2,1,""],calculate_virtual_reward:[2,2,1,""],reset:[2,2,1,""]},"fragile.optimize.env":{Function:[3,0,1,""],Minimizer:[3,0,1,""],MinimizerWrapper:[3,0,1,""]},"fragile.optimize.env.Function":{__init__:[3,2,1,""],calculate_end:[3,2,1,""],from_bounds_params:[3,2,1,""],reset:[3,2,1,""],sample_bounds:[3,2,1,""],step:[3,2,1,""]},"fragile.optimize.env.Minimizer":{__init__:[3,2,1,""],minimize:[3,2,1,""],minimize_batch:[3,2,1,""],minimize_point:[3,2,1,""]},"fragile.optimize.env.MinimizerWrapper":{__init__:[3,2,1,""],step:[3,2,1,""]},"fragile.optimize.models":{ESModel:[3,0,1,""]},"fragile.optimize.models.ESModel":{__init__:[3,2,1,""],sample:[3,2,1,""]},"fragile.optimize.swarm":{FunctionMapper:[3,0,1,""]},"fragile.optimize.swarm.FunctionMapper":{__init__:[3,2,1,""],from_function:[3,2,1,""],reset:[3,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method"},terms:{"01_introduction_to_fragile_with_atari_gam":7,"02_function_minim":6,"abstract":0,"boolean":[1,2,3,4],"case":[2,6],"class":[0,1,3,6,7],"default":[2,6,7],"float":[2,3],"function":[0,1,2,4],"import":[2,6,7],"int":[1,2,3],"long":6,"new":[0,1,2,3,4,7],"return":[1,2,3,6,7],"static":2,"true":[1,2,3,4,6,7],"try":7,"while":4,And:6,For:[2,3,7],The:[1,2,3,4,6,7],There:6,Used:2,__getitem__:2,__init__:[1,2,3],__len__:2,__setitem__:2,_dtmodel:0,_env:2,abov:4,accept:2,access:[2,4],accord:[2,4],accordingli:2,account:[2,3],accumul:[1,2,3,4],accumulate_reward:[2,3,6],achiev:7,across:[3,6],act:[1,2],action:[1,2,3,4,6,7],acycl:[4,7],adapt:[3,6],add:2,add_critic_param:2,add_stat:4,added:2,adding:2,addit:[1,2,7],after:[2,3,4,6,7],against:2,algorithm:[0,1,2,3,6,7],alia:[1,2],aliv:2,alive_leaf:2,alive_mask:[4,6],all:[1,2,3,4,6,7],allow:[1,2,4,6,7],along:2,alreadi:2,also:[1,2,6],among:4,ani:[1,2,3,6,7],anoth:1,api:[0,7],appli:[1,2,3,4,7],applic:2,appropi:7,appropri:7,arbitrari:[1,2,3],architectur:[0,7],arg:[1,2,3],argmax:7,argument:[2,3],arrai:[2,3,6],aspect:4,assign:[3,4],associ:[2,4],atari:0,atarienv:[0,7],atarienviron:[1,7],atariwalk:0,attribut:2,autoreset:7,avoid:7,balanc:[2,4],balance_and_prun:[2,4],base:[2,4],base_class:[1,2],basecrit:[1,2],baseenviron:[0,7],basemodel:0,basestatetre:0,baseswarm:0,basewalk:0,basewrapp:0,batch:[2,3,6,7],batch_siz:[1,2,3,7],becaus:7,been:1,befor:7,behav:2,being:[4,7],benchmark:0,best:[2,3,6],best_found:[2,6],best_id:7,best_ix:7,best_ob:6,best_reward:6,best_reward_found:[2,6],best_stat:6,best_walk:[1,2],between:[2,3],bigger:[2,7],binari:2,binaryswap:0,blank:2,block:7,bool:[1,2,3],bool_:2,both:2,bound:[0,3,6],branch:[2,7],build:[1,2],calcul:[1,2,3,6],calculate_dist:[1,2,4],calculate_end:3,calculate_end_condit:[1,2,4],calculate_virtual_reward:[2,4],call:[2,3,4,7],callabl:[2,3,7],can:[1,2,4,6,7],care:[2,4,7],charg:2,check:[2,3],choic:6,choos:7,chosen:[1,2],classmethod:[2,3],clear:[1,2,3],clip:2,clone:[2,4,6],clone_prob:[4,6],clone_se:7,clone_walk:[2,4],close:2,cluster:[6,7],code:[2,7],collect:2,color:4,combin:4,common:2,companion:[2,4],compas_clon:[4,6],compas_ix:2,compat:2,complet:1,composit:4,comput:[2,4,6,7],concat_st:2,condit:[1,2,6,7],consid:2,construct:7,contain:[1,2,3,4,7],content:0,continu:[1,2],continuousmodel:0,continuousuniform:0,control:[2,7],convent:7,coordin:[2,3,4,6],copi:2,core:[0,1,3,6,7],correspond:[1,2,3,4,6],cover:7,crate:7,creat:[2,3,6],crete:2,critic:[1,2,6,7],critic_scor:6,cum_reward:[2,4,6,7],cumulative_reward:2,current:[1,2],custom:2,data:[0,1,2,3,4],dead:[4,6],death:[1,7],decid:[1,2],decis:7,decreas:2,def:6,defin:[0,2,3,4],depend:0,deploy:7,describ:[1,2,3,4],descript:0,design:[4,6,7],desir:[2,6],determin:[2,3],dict:[1,2],dictionari:[1,2],differ:[2,3,4,7],dimens:[1,2,3,6,7],dimension:[2,3,6],direct:[4,7],directli:2,discard:2,discret:[2,7],discreteenv:0,discreteenviron:2,discretemodel:0,discreteuniform:[0,7],displai:[2,7],dist_scal:2,distanc:[1,2,4,6],distance_scal:7,distribut:[2,6,7],divers:7,document:[6,7],doe:[2,6,7],domain:[3,6],done:[2,6],dt_sampler:[2,7],dtype:[2,6],dure:4,each:[1,2,3,4,6,7],easier:2,easili:7,effect:2,effici:6,egghold:6,either:7,element:2,emul:1,end:[2,4,6],end_condit:[4,6],env:[1,2,3,6,7],env_cal:[2,7],env_class:7,env_stat:[1,2,3],env_state_param:2,environ:[0,1,4,6],envstat:3,episod:[1,2,3],epoch:2,equal:[1,2,3,7],equival:2,error:2,esmodel:[0,6],evalu:[3,6],even:3,everi:[2,7],evolut:[2,7],evolutionari:0,evolv:[2,4],exampl:[0,2,3,7],execut:[2,4,7],exist:2,expens:6,explain:7,explor:[1,6,7],expon:2,extern:[1,2,3],extra:[2,7],extract:[2,7],factor:2,fai:2,fall:2,fals:[1,2,3,6,7],featur:6,find:[6,7],fine:7,finish:[1,2,4],first:[1,2,3,6,7],fix_best:4,float32:[2,6],float64:[2,6],folder:[6,7],follow:[1,2,4,7],form:2,formula:2,found:[2,3,6],four:6,fractal:2,fractalai:[2,4],fragil:[1,2,3,4,6,7],framework:[4,6],from:[1,2,3,6,7],from_arrai:2,from_bounds_param:3,from_funct:3,from_hash:[2,7],from_tupl:2,functionmapp:0,game:0,game_nam:7,gaussian:[2,3,6],gaussian_model:6,gaussiandt:7,gener:[1,2,4],get:[0,2],get_alive_compa:2,get_bound:6,get_branch:7,get_params_dict:[1,2],get_scaled_interv:2,get_stat:2,given:[1,2,3,4,7],global:6,goal:2,graph:[4,7],group_hash:2,gym:7,handl:[1,2,7],has:[1,2,4,6],hash_valu:2,have:[2,3,7],help:6,here:2,high:[2,3,6],higher:2,histor:4,histori:[2,4,7],historytre:0,hood:6,how:[2,6,7],id_walk:[2,4,6,7],identifi:4,ids:2,ignor:[1,2,3],implement:[2,3,4,6,7],improv:6,incorpor:[1,2,7],increas:[2,6,7],index:[0,2,4],indic:[1,2,4,7],inf:[2,3],infer:2,inform:[1,2,3],inherit:2,init_swarm:2,initi:[0,1,2,3],initialis:2,input:3,insert:2,insid:[0,2,3,4,6],instanc:[1,2,3,6,7],instanti:[2,7],instead:[6,7],int64:[2,6],integ:[2,4,7],interact:[1,2,3],interfac:[1,2,7],intern:[1,2,3,4,7],interv:[2,3,6],involv:[2,4,7],ipynb:[6,7],isol:4,item:2,iter:[1,2,6,7],iteritem:2,iterv:2,its:[2,3,4,6,7],jonn:6,jupyt:[6,7],keep:[1,2,4,7],kei:2,kept:7,keyword:2,kind:2,kwarg:[1,2,3],lambda:[3,6,7],landscap:6,last:3,launch:2,leaf:2,leaf_nod:2,least:4,leav:2,length:[2,3],lennard:6,lennardjon:6,less:4,librari:7,lie:3,lies:[2,3],list:[2,4],loc:6,loc_dt:7,local:[0,3],local_optimize_styblinsky_tang:6,logic:[2,4],longer:[2,7],loop:[0,2,7],low:[2,3,6],lower:[2,3],lowest:7,made:6,main:4,make:[2,4],manag:2,mang:4,mani:[2,6],mapperwalk:2,margin:2,match:7,mathemat:3,matrix:[2,3],max:6,max_dt:7,max_it:[6,7],max_reward:1,maxim:[2,3,7],maximum:[1,2,7],maxit:6,mean:[1,6,7],meant:2,measur:7,mechan:1,meet:6,memori:[1,2,7],met:[2,6],method:4,metric:4,min:6,min_dt:7,minim:[0,1,2,7],minima:6,minimize_batch:3,minimize_point:3,minimizerwrapp:[0,6],minimum:2,model:[0,4,6],model_cal:[2,7],model_st:[1,2,3],model_state_param:2,modifi:[2,4],modul:[0,6],montezuma:1,montezumawalk:0,more:[6,7],most:7,mspacman:7,multipli:2,must:7,mutat:3,n_action:[2,7],n_atom:6,n_dim:2,n_swap:2,n_walker:[2,6,7],name:[2,4,7],name_1:2,nan:6,ndarrai:[2,3,6],necessari:[2,4],need:[2,4,6,7],negat:4,next:[2,7],nobal:6,node:2,none:[1,2,3,6],normal:[3,7],normalcontinu:[3,6],notebook:[6,7],number:[1,2,3,7],numer:3,numpi:[2,3,6],object:[2,3,7],obs:6,observ:[2,3,4],observation_spac:2,observs_shap:2,obtain:3,onc:7,one:[2,3],ones:2,onli:[1,2,3,6,7],open:2,openai:7,optim:0,optima:6,optimize_egghold:6,optimum:[3,6],option:[2,6,7],order:[2,6,7],orphan:2,other:[2,4,7],otherwis:[2,3],our:7,outcom:2,output:2,outsid:3,over:7,overrid:2,override_param:2,overview:7,packag:7,page:0,pair:2,parallel:2,parallelenviron:7,param:2,param_dict:[1,2],paramet:[1,2,3,6,7],params_dict:2,params_to_arrai:2,parent:3,parenthesi:4,part:2,particl:6,pass:[2,3,6,7],past:2,path:7,percentag:2,perform:[1,2,3,6],permut:3,perturb:[2,3,6],phase:4,plai:[1,7],plan:2,plangym:[1,2,7],point:[2,3,6],points_in_bound:2,polici:[2,3,4,7],popul:7,posit:[2,3],possibl:[2,6,7],predict:[2,4],print:[2,6,7],print_everi:[2,6,7],prior:2,prioriti:2,probabl:[2,3,4],problem:[0,2,4,7],process:[1,2,3,4,6,7],processed_reward:[4,6],progress:2,properti:2,proport:2,propos:3,provid:[2,3,4,6,7],prune:2,prune_tre:[2,4,7],python:[3,6],qualiti:7,queri:2,quickli:4,rais:2,ram:[1,7],random:[1,2,3,6,7],random_step_prob:3,randomcontinu:2,randomli:3,rang:[2,7],reach:[1,4,7],read:4,readi:2,recombin:3,recommend:6,recov:[2,7],regular:6,rel:7,relat:2,relationship:4,relativ:[1,2],reli:6,remov:[2,7],render:7,repositori:1,repres:[1,2,3,4,6,7],represent:4,requir:[2,6],reset:[1,2,3,4],resourc:6,respect:[1,4,7],restart:2,restor:4,result:[2,3],reward:[1,2,3,4,6,7],reward_scal:[2,7],round:7,row:2,run:[0,2,4,6],run_step:[2,4],run_swarm:[2,4,6,7],safe_margin:2,same:[2,3,6,7],sampl:[0,2,3,4],sample_bound:3,sapl:7,save:[2,4,7],scalar:[2,3,6],scale:[2,6,7],scale_dt:7,scipi:[3,6],score:[1,2,7],search:[0,2,3],second:2,see:6,select:[2,4],self:2,serial:7,set:[1,2,3,7],sever:2,shape:[2,3,6],should:[1,2,6,7],significantli:6,similar:4,simpl:6,simplifi:7,simul:[2,4],simultan:7,singl:[2,3,6],size:[2,3,7],sleep:7,smaller:2,solut:3,solv:[4,6,7],some:[2,3],sourc:[1,2,3],space:2,specif:[2,7],specifi:[1,2],split_stat:2,stack:[3,6],start:[0,1,2,3],start_same_po:3,state:[0,1,3,4,6,7],state_class:[1,2],state_dict:2,stateown:2,states_from_data:2,states_id:2,states_shap:2,statesenv:[0,1,3,4,7],statesmodel:[0,1,3,4],statestre:2,stateswalk:[0,3,4],statetre:[0,4,7],std:6,step:[1,2,3,4,6,7],step_and_update_best:[2,4],step_walk:[2,4],stop:[1,2,4,7],store:[0,2,3,4],str:[1,2],strategi:[0,2,7],structur:[0,2,4],styblinski_tang:6,sub:6,substitut:3,success:6,sum:[3,6],support:6,swap:2,swarm:[0,6],take:[2,3,4,6,7],taken:[2,3],target:[1,2,3],tensor:[1,2,3],test:[0,4],than:7,thei:[2,4,7],them:[2,3],thi:[1,2,3,4,6,7],those:6,though:3,time:[1,2,7],timestep:7,to_tupl:2,toler:2,track:[1,2,4,7],trajectori:[6,7],transform:2,transit:[2,3,7],tre:2,tree:[2,7],tricki:7,tupl:[1,2,3],tutori:7,two:[2,3,6],type:2,uber:1,under:6,undergo:[2,7],uniform:[2,7],uniformli:3,union:[2,3],uniqu:[2,4],until:[1,2],updat:[1,2,3,6],update_best:4,update_clone_prob:4,update_id:4,update_st:[2,4],update_states_with_crit:2,update_tre:2,upon:2,upper:3,use:[2,6,7],used:[1,2,3,4,6,7],uses:6,using:[0,1,2,3,4,7],val:2,valid:2,valu:[1,2,3,4,6,7],variabl:[2,3,7],vector:[2,3,4,6],veri:6,via:2,virtual:[2,4],virtual_reward:[4,6],visit:[2,7],visual:0,wai:7,walker:[0,1,3,4,6,7],walker_st:2,walkers_cal:2,walkers_st:[2,3],want:7,well:7,when:[2,4,7],where:[2,3,6],which:[2,6],will_clon:[2,4,6],wise:2,without:[1,2,3],work:[2,6,7],wrap:3,wrapper:[3,7],write:[4,7],x0_high:2,x0_low:2,x1_high:2,x1_low:2,xn_high:2,xn_low:2,you:[6,7],zip:7},titles:["Welcome to Fragile\u2019s documentation!","Atari games","Core module","Function Optimization","Architecture","&lt;no title&gt;","Function minimization example","Getting started with Atari games"],titleterms:{"abstract":2,"class":[2,4],"function":[3,6],"new":6,_dtmodel:2,algorithm:4,api:2,architectur:4,atari:[1,7],atarienv:1,atariwalk:1,baseenviron:2,basemodel:2,basestatetre:2,baseswarm:2,basewalk:2,basewrapp:2,benchmark:6,binaryswap:2,bound:2,continuousmodel:2,continuousuniform:2,core:2,data:7,defin:[6,7],depend:4,descript:4,discreteenv:2,discretemodel:2,discreteuniform:2,document:0,environ:[2,3,7],esmodel:3,evolutionari:[3,6],exampl:6,fragil:0,functionmapp:[3,6],game:[1,7],get:7,historytre:[2,7],indic:0,initi:7,insid:7,local:6,loop:4,minim:[3,6],minimizerwrapp:3,model:[2,3,7],modul:2,montezumawalk:1,optim:[3,6],problem:6,run:7,sampl:[6,7],start:7,state:2,statesenv:2,statesmodel:2,stateswalk:2,statetre:2,store:7,strategi:[3,6],structur:7,swarm:[2,3,4,7],tabl:0,test:6,using:6,visual:7,walker:2,welcom:0}})