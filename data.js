
var dataObj = {
cols: [
    {id: 'ts',      label: 'Localtime',     type: 'date'},
    {id: 'p1',      label: 'Prediction #1', type: 'number'},
    {id: 'p2',      label: 'Prediction #2', type: 'number'},
    {id: 'p2_an',                           type: 'string', role:'annotation'},
    {id: 'prize',   label: 'Current Prize', type: 'number'},
    {id: 'prize_an',                        type: 'string', role:'annotation'},
    {id: 'change',  label: '+Change',       type: 'number'}
],
rows: [
    { c:[ {v: new Date(1399712400000)}, {v: 1825968}, {v: 1830969}, {v: ''}, {v: 1856205}, {v: ''}, {v: 0} ]},
    { c:[ {v: new Date(1399716001000)}, {v: 1938779}, {v: 1949644}, {v: ''}, {v: 1933828}, {v: ''}, {v: 77623} ]},
    { c:[ {v: new Date(1399719601000)}, {v: 2037002}, {v: 2045430}, {v: ''}, {v: 2015464}, {v: ''}, {v: 81636} ]},
    { c:[ {v: new Date(1399723201000)}, {v: 2124002}, {v: 2127882}, {v: ''}, {v: 2092497}, {v: ''}, {v: 77033} ]},
    { c:[ {v: new Date(1399726801000)}, {v: 2202083}, {v: 2201268}, {v: ''}, {v: 2164615}, {v: ''}, {v: 72118} ]},
    { c:[ {v: new Date(1399730401000)}, {v: 2272905}, {v: 2267961}, {v: ''}, {v: 2270004}, {v: ''}, {v: 105389} ]},
    { c:[ {v: new Date(1399734001000)}, {v: 2337703}, {v: 2329444}, {v: ''}, {v: 2341462}, {v: ''}, {v: 71458} ]},
    { c:[ {v: new Date(1399737601000)}, {v: 2397422}, {v: 2386719}, {v: ''}, {v: 2409913}, {v: ''}, {v: 68451} ]},
    { c:[ {v: new Date(1399741201000)}, {v: 2452801}, {v: 2440504}, {v: ''}, {v: 2474671}, {v: ''}, {v: 64758} ]},
    { c:[ {v: new Date(1399744801000)}, {v: 2504428}, {v: 2491331}, {v: ''}, {v: 2522017}, {v: ''}, {v: 47346} ]},
    { c:[ {v: new Date(1399748401000)}, {v: 2552779}, {v: 2539611}, {v: ''}, {v: 2598168}, {v: ''}, {v: 76151} ]},
    { c:[ {v: new Date(1399752001000)}, {v: 2598246}, {v: 2585666}, {v: ''}, {v: 2634059}, {v: ''}, {v: 35891} ]},
    { c:[ {v: new Date(1399755601000)}, {v: 2641153}, {v: 2629758}, {v: ''}, {v: 2664469}, {v: ''}, {v: 30410} ]},
    { c:[ {v: new Date(1399759201000)}, {v: 2681774}, {v: 2672100}, {v: ''}, {v: 2689005}, {v: ''}, {v: 24536} ]},
    { c:[ {v: new Date(1399762801000)}, {v: 2720339}, {v: 2712868}, {v: ''}, {v: 2710971}, {v: ''}, {v: 21966} ]},
    { c:[ {v: new Date(1399766401000)}, {v: 2757047}, {v: 2752212}, {v: ''}, {v: 2749460}, {v: ''}, {v: 38489} ]},
    { c:[ {v: new Date(1399770001000)}, {v: 2792068}, {v: 2790261}, {v: ''}, {v: 2772216}, {v: ''}, {v: 22756} ]},
    { c:[ {v: new Date(1399773601000)}, {v: 2825550}, {v: 2827122}, {v: ''}, {v: 2796353}, {v: ''}, {v: 24137} ]},
    { c:[ {v: new Date(1399777201000)}, {v: 2857624}, {v: 2862892}, {v: ''}, {v: 2830980}, {v: ''}, {v: 34627} ]},
    { c:[ {v: new Date(1399780801000)}, {v: 2888403}, {v: 2897653}, {v: ''}, {v: 2864041}, {v: ''}, {v: 33061} ]},
    { c:[ {v: new Date(1399784401000)}, {v: 2917987}, {v: 2931478}, {v: ''}, {v: 2899710}, {v: ''}, {v: 35669} ]},
    { c:[ {v: new Date(1399788001000)}, {v: 2946466}, {v: 2964432}, {v: ''}, {v: 2931879}, {v: ''}, {v: 32169} ]},
    { c:[ {v: new Date(1399791601000)}, {v: 2973919}, {v: 2996573}, {v: ''}, {v: 2969297}, {v: ''}, {v: 37418} ]},
    { c:[ {v: new Date(1399795201000)}, {v: 3000418}, {v: 3027952}, {v: ''}, {v: 2999189}, {v: 'Prediction #1'}, {v: 29892} ]},
    { c:[ {v: new Date(1399798801000)}, {v: 3026026}, {v: 3058616}, {v: ''}, {v: 3034064}, {v: ''}, {v: 34875} ]},
    { c:[ {v: new Date(1399802401000)}, {v: 3050802}, {v: 3088607}, {v: ''}, {v: 3070546}, {v: ''}, {v: 36482} ]},
    { c:[ {v: new Date(1399806001000)}, {v: 3074799}, {v: 3117962}, {v: ''}, {v: 3103423}, {v: ''}, {v: 32877} ]},
    { c:[ {v: new Date(1399809601000)}, {v: 3098063}, {v: 3146718}, {v: ''}, {v: 3144701}, {v: ''}, {v: 41278} ]},
    { c:[ {v: new Date(1399813201000)}, {v: 3120638}, {v: 3174904}, {v: ''}, {v: 3178892}, {v: ''}, {v: 34191} ]},
    { c:[ {v: new Date(1399816801000)}, {v: 3142563}, {v: 3202550}, {v: ''}, {v: 3221032}, {v: ''}, {v: 42140} ]},
    { c:[ {v: new Date(1399820401000)}, {v: 3163876}, {v: 3229683}, {v: ''}, {v: 3260090}, {v: ''}, {v: 39058} ]},
    { c:[ {v: new Date(1399824001000)}, {v: 3184609}, {v: 3256327}, {v: ''}, {v: 3294690}, {v: ''}, {v: 34600} ]},
    { c:[ {v: new Date(1399827601000)}, {v: 3204793}, {v: 3282505}, {v: ''}, {v: 3321705}, {v: ''}, {v: 27015} ]},
    { c:[ {v: new Date(1399831201000)}, {v: 3224456}, {v: 3308238}, {v: ''}, {v: 3347849}, {v: ''}, {v: 26144} ]},
    { c:[ {v: new Date(1399834801000)}, {v: 3243625}, {v: 3333545}, {v: ''}, {v: 3369811}, {v: ''}, {v: 21962} ]},
    { c:[ {v: new Date(1399838401000)}, {v: 3262324}, {v: 3358444}, {v: ''}, {v: 3386406}, {v: ''}, {v: 16595} ]},
    { c:[ {v: new Date(1399842001000)}, {v: 3280575}, {v: 3382953}, {v: ''}, {v: 3402400}, {v: ''}, {v: 15994} ]},
    { c:[ {v: new Date(1399845601000)}, {v: 3298399}, {v: 3407087}, {v: ''}, {v: 3414627}, {v: ''}, {v: 12227} ]},
    { c:[ {v: new Date(1399849201000)}, {v: 3315817}, {v: 3430861}, {v: ''}, {v: 3423787}, {v: ''}, {v: 9160} ]},
    { c:[ {v: new Date(1399852801000)}, {v: 3332845}, {v: 3454289}, {v: ''}, {v: 3433069}, {v: ''}, {v: 9282} ]},
    { c:[ {v: new Date(1399856401000)}, {v: 3349501}, {v: 3477383}, {v: ''}, {v: 3444297}, {v: ''}, {v: 11228} ]},
    { c:[ {v: new Date(1399860001000)}, {v: 3365800}, {v: 3500156}, {v: ''}, {v: 3456337}, {v: ''}, {v: 12040} ]},
    { c:[ {v: new Date(1399863601000)}, {v: 3381759}, {v: 3522620}, {v: ''}, {v: 3470379}, {v: ''}, {v: 14042} ]},
    { c:[ {v: new Date(1399867201000)}, {v: 3397390}, {v: 3544785}, {v: ''}, {v: 3485626}, {v: ''}, {v: 15247} ]},
    { c:[ {v: new Date(1399870801000)}, {v: 3412708}, {v: 3566661}, {v: ''}, {v: 3504298}, {v: ''}, {v: 18672} ]},
    { c:[ {v: new Date(1399874401000)}, {v: 3427723}, {v: 3588258}, {v: ''}, {v: 3520657}, {v: ''}, {v: 16359} ]},
    { c:[ {v: new Date(1399878001000)}, {v: 3442449}, {v: 3609585}, {v: ''}, {v: 3538239}, {v: ''}, {v: 17582} ]},
    { c:[ {v: new Date(1399881601000)}, {v: 3456895}, {v: 3630651}, {v: ''}, {v: 3557171}, {v: ''}, {v: 18932} ]},
    { c:[ {v: new Date(1399885201000)}, {v: 3471073}, {v: 3651464}, {v: ''}, {v: 3577714}, {v: ''}, {v: 20543} ]},
    { c:[ {v: new Date(1399888801000)}, {v: 3484992}, {v: 3672032}, {v: ''}, {v: 3599296}, {v: ''}, {v: 21582} ]},
    { c:[ {v: new Date(1399892402000)}, {v: 3498665}, {v: 3692368}, {v: ''}, {v: 3628764}, {v: ''}, {v: 29468} ]},
    { c:[ {v: new Date(1399896001000)}, {v: 3512090}, {v: 3712462}, {v: ''}, {v: 3662369}, {v: ''}, {v: 33605} ]},
    { c:[ {v: new Date(1399899601000)}, {v: 3525286}, {v: 3732337}, {v: ''}, {v: 3694489}, {v: ''}, {v: 32120} ]},
    { c:[ {v: new Date(1399903201000)}, {v: 3538258}, {v: 3751995}, {v: ''}, {v: 3726361}, {v: ''}, {v: 31872} ]},
    { c:[ {v: new Date(1399906801000)}, {v: 3551012}, {v: 3771442}, {v: ''}, {v: 3760800}, {v: ''}, {v: 34439} ]},
    { c:[ {v: new Date(1399910401000)}, {v: 3563557}, {v: 3790683}, {v: ''}, {v: 3786965}, {v: ''}, {v: 26165} ]},
    { c:[ {v: new Date(1399914001000)}, {v: 3575899}, {v: 3809723}, {v: ''}, {v: 3812450}, {v: ''}, {v: 25485} ]},
    { c:[ {v: new Date(1399917601000)}, {v: 3588044}, {v: 3828569}, {v: ''}, {v: 3835800}, {v: ''}, {v: 23350} ]},
    { c:[ {v: new Date(1399921201000)}, {v: 3599998}, {v: 3847226}, {v: ''}, {v: 3853684}, {v: ''}, {v: 17884} ]},
    { c:[ {v: new Date(1399924801000)}, {v: 3611768}, {v: 3865698}, {v: ''}, {v: 3867859}, {v: ''}, {v: 14175} ]},
    { c:[ {v: new Date(1399928401000)}, {v: 3623359}, {v: 3883989}, {v: ''}, {v: 3878135}, {v: 'Prediction #2'}, {v: 10276} ]},
    { c:[ {v: new Date(1399932001000)}, {v: 3634776}, {v: 3902105}, {v: ''}, {v: 3888711}, {v: ''}, {v: 10576} ]},
    { c:[ {v: new Date(1399935601000)}, {v: 3646025}, {v: 3920050}, {v: ''}, {v: 3897213}, {v: ''}, {v: 8502} ]},
    { c:[ {v: new Date(1399939201000)}, {v: 3657111}, {v: 3937828}, {v: ''}, {v: 3906056}, {v: ''}, {v: 8843} ]},
    { c:[ {v: new Date(1399942801000)}, {v: 3668037}, {v: 3955443}, {v: ''}, {v: 3914609}, {v: ''}, {v: 8553} ]},
    { c:[ {v: new Date(1399946401000)}, {v: 3678809}, {v: 4063898}, {v: 'Adjusted'}, {v: 4017929}, {v: ''}, {v: 103320} ]},
    { c:[ {v: new Date(1399950001000)}, {v: 3689431}, {v: 4081198}, {v: ''}, {v: 4030696}, {v: ''}, {v: 12767} ]},
    { c:[ {v: new Date(1399953601000)}, {v: 3699907}, {v: 4098346}, {v: ''}, {v: 4044853}, {v: ''}, {v: 14157} ]},
    { c:[ {v: new Date(1399957201000)}, {v: 3710241}, {v: 4115345}, {v: ''}, {v: 4060995}, {v: ''}, {v: 16142} ]},
    { c:[ {v: new Date(1399960801000)}, {v: 3720437}, {v: 4132199}, {v: ''}, {v: 4076863}, {v: ''}, {v: 15868} ]},
    { c:[ {v: new Date(1399964401000)}, {v: 3730498}, {v: 4148911}, {v: ''}, {v: 4090646}, {v: ''}, {v: 13783} ]},
    { c:[ {v: new Date(1399968001000)}, {v: 3740428}, {v: 4165483}, {v: ''}, {v: 4105175}, {v: ''}, {v: 14529} ]},
    { c:[ {v: new Date(1399971601000)}, {v: 3750231}, {v: 4181920}, {v: ''}, {v: 4119496}, {v: ''}, {v: 14321} ]},
    { c:[ {v: new Date(1399975201000)}, {v: 3759909}, {v: 4198223}, {v: ''}, {v: 4138025}, {v: ''}, {v: 18529} ]},
    { c:[ {v: new Date(1399978801000)}, {v: 3769466}, {v: 4214395}, {v: ''}, {v: 4160429}, {v: ''}, {v: 22404} ]},
    { c:[ {v: new Date(1399982401000)}, {v: 3778904}, {v: 4230440}, {v: ''}, {v: 4186269}, {v: ''}, {v: 25840} ]},
    { c:[ {v: new Date(1399986001000)}, {v: 3788227}, {v: 4246360}, {v: ''}, {v: 4210368}, {v: ''}, {v: 24099} ]},
    { c:[ {v: new Date(1399989601000)}, {v: 3797437}, {v: 4262157}, {v: ''}, {v: 4234555}, {v: ''}, {v: 24187} ]},
    { c:[ {v: new Date(1399993201000)}, {v: 3806538}, {v: 4277833}, {v: ''}, {v: 4258338}, {v: ''}, {v: 23783} ]},
    { c:[ {v: new Date(1399996801000)}, {v: 3815531}, {v: 4293392}, {v: ''}, {v: 4283198}, {v: ''}, {v: 24860} ]},
    { c:[ {v: new Date(1400000401000)}, {v: 3824419}, {v: 4308834}, {v: ''}, {v: 4303015}, {v: ''}, {v: 19817} ]},
    { c:[ {v: new Date(1400004001000)}, {v: 3833205}, {v: 4324164}, {v: ''}, {v: 4320130}, {v: ''}, {v: 17115} ]},
    { c:[ {v: new Date(1400007601000)}, {v: 3841890}, {v: 4339381}, {v: ''}, {v: 4333162}, {v: ''}, {v: 13032} ]},
    { c:[ {v: new Date(1400011201000)}, {v: 3850478}, {v: 4354490}, {v: ''}, {v: 4344302}, {v: ''}, {v: 11140} ]},
    { c:[ {v: new Date(1400014801000)}, {v: 3858970}, {v: 4369491}, {v: ''}, {v: 4353798}, {v: ''}, {v: 9496} ]},
    { c:[ {v: new Date(1400018401000)}, {v: 3867369}, {v: 4384387}, {v: ''}, {v: 4361567}, {v: ''}, {v: 7769} ]},
    { c:[ {v: new Date(1400022001000)}, {v: 3875676}, {v: 4399179}, {v: ''}, {v: 4368345}, {v: ''}, {v: 6778} ]},
    { c:[ {v: new Date(1400025601000)}, {v: 3883893}, {v: 4413869}, {v: ''}, {v: 4374216}, {v: ''}, {v: 5871} ]},
    { c:[ {v: new Date(1400029201000)}, {v: 3892023}, {v: 4450460}, {v: 'Adjusted'}, {v: 4407760}, {v: ''}, {v: 33544} ]},
    { c:[ {v: new Date(1400032801000)}, {v: 3900067}, {v: 4464952}, {v: ''}, {v: 4417512}, {v: ''}, {v: 9752} ]},
    { c:[ {v: new Date(1400036401000)}, {v: 3908027}, {v: 4479348}, {v: ''}, {v: 4430759}, {v: ''}, {v: 13247} ]},
    { c:[ {v: new Date(1400040001000)}, {v: 3915905}, {v: 4493650}, {v: ''}, {v: 4442902}, {v: ''}, {v: 12143} ]},
    { c:[ {v: new Date(1400043601000)}, {v: 3923703}, {v: 4507857}, {v: ''}, {v: 4456284}, {v: ''}, {v: 13382} ]},
    { c:[ {v: new Date(1400047201000)}, {v: 3931421}, {v: 4521974}, {v: ''}, {v: 4470212}, {v: ''}, {v: 13928} ]},
    { c:[ {v: new Date(1400050801000)}, {v: 3939062}, {v: 4536000}, {v: ''}, {v: 4482923}, {v: ''}, {v: 12711} ]},
    { c:[ {v: new Date(1400054401000)}, {v: 3946627}, {v: 4549937}, {v: ''}, {v: 4497634}, {v: ''}, {v: 14711} ]},
    { c:[ {v: new Date(1400058001000)}, {v: 3954118}, {v: 4563787}, {v: ''}, {v: 4511742}, {v: ''}, {v: 14108} ]},
    { c:[ {v: new Date(1400061601000)}, {v: 3961536}, {v: 4577551}, {v: ''}, {v: 4529301}, {v: ''}, {v: 17559} ]},
    { c:[ {v: new Date(1400065201000)}, {v: 3968882}, {v: 4591231}, {v: ''}, {v: 4556914}, {v: ''}, {v: 27613} ]},
    { c:[ {v: new Date(1400068801000)}, {v: 3976159}, {v: 4604827}, {v: ''}, {v: 4579623}, {v: ''}, {v: 22709} ]},
    { c:[ {v: new Date(1400072401000)}, {v: 3983366}, {v: 4618341}, {v: ''}, {v: 4603633}, {v: ''}, {v: 24010} ]},
    { c:[ {v: new Date(1400076001000)}, {v: 3990506}, {v: 4631775}, {v: ''}, {v: 4624898}, {v: ''}, {v: 21265} ]},
    { c:[ {v: new Date(1400079601000)}, {v: 3997580}, {v: 4645129}, {v: ''}, {v: 4648202}, {v: ''}, {v: 23304} ]},
    { c:[ {v: new Date(1400083201000)}, {v: 4004589}, {v: 4658405}, {v: ''}, {v: 4666749}, {v: ''}, {v: 18547} ]},
    { c:[ {v: new Date(1400086801000)}, {v: 4011533}, {v: 4671604}, {v: ''}, {v: 4686664}, {v: ''}, {v: 19915} ]},
    { c:[ {v: new Date(1400090401000)}, {v: 4018416}, {v: 4684727}, {v: ''}, {v: 4706211}, {v: ''}, {v: 19547} ]},
    { c:[ {v: new Date(1400094001000)}, {v: 4025236}, {v: 4697775}, {v: ''}, {v: 4722690}, {v: ''}, {v: 16479} ]},
    { c:[ {v: new Date(1400097601000)}, {v: 4031996}, {v: 4710749}, {v: ''}, {v: 4734534}, {v: ''}, {v: 11844} ]},
    { c:[ {v: new Date(1400101201000)}, {v: 4038697}, {v: 4723651}, {v: ''}, {v: 4744927}, {v: ''}, {v: 10393} ]},
    { c:[ {v: new Date(1400104801000)}, {v: 4045339}, {v: 4736481}, {v: ''}, {v: 4753414}, {v: ''}, {v: 8487} ]},
    { c:[ {v: new Date(1400108401000)}, {v: 4051924}, {v: 4749240}, {v: ''}, {v: 4761238}, {v: ''}, {v: 7824} ]},
    { c:[ {v: new Date(1400112001000)}, {v: 4058453}, {v: 4761930}, {v: ''}, {v: 4769393}, {v: ''}, {v: 8155} ]},
    { c:[ {v: new Date(1400115601000)}, {v: 4064926}, {v: 4774550}, {v: ''}, {v: 4775232}, {v: ''}, {v: 5839} ]},
    { c:[ {v: new Date(1400119201000)}, {v: 4071345}, {v: 4787104}, {v: ''}, {v: 4782951}, {v: ''}, {v: 7719} ]},
    { c:[ {v: new Date(1400122801000)}, {v: 4077710}, {v: 4799590}, {v: ''}, {v: 4791337}, {v: ''}, {v: 8386} ]},
    { c:[ {v: new Date(1400126401000)}, {v: 4084022}, {v: 4812010}, {v: ''}, {v: 4800050}, {v: ''}, {v: 8713} ]},
    { c:[ {v: new Date(1400130001000)}, {v: 4090283}, {v: 4824366}, {v: ''}, {v: 4807256}, {v: ''}, {v: 7206} ]},
    { c:[ {v: new Date(1400133601000)}, {v: 4096492}, {v: 4836657}, {v: ''}, {v: 4817439}, {v: ''}, {v: 10183} ]},
    { c:[ {v: new Date(1400137201000)}, {v: 4102651}, {v: 4848885}, {v: ''}, {v: 4827991}, {v: ''}, {v: 10552} ]},
    { c:[ {v: new Date(1400140801000)}, {v: 4108761}, {v: 4861050}, {v: ''}, {v: 4837954}, {v: ''}, {v: 9963} ]},
    { c:[ {v: new Date(1400144401000)}, {v: 4114823}, {v: 4873154}, {v: ''}, {v: 4849637}, {v: ''}, {v: 11683} ]},
    { c:[ {v: new Date(1400148001000)}, {v: 4120836}, {v: 4885196}, {v: ''}, {v: 4862486}, {v: ''}, {v: 12849} ]},
    { c:[ {v: new Date(1400151601000)}, {v: 4126803}, {v: 4897179}, {v: ''}, {v: 4877337}, {v: ''}, {v: 14851} ]},
    { c:[ {v: new Date(1400155201000)}, {v: 4132723}, {v: 4909102}, {v: ''}, {v: 4893132}, {v: ''}, {v: 15795} ]},
    { c:[ {v: new Date(1400158801000)}, {v: 4138598}, {v: 4920967}, {v: ''}, {v: 4912001}, {v: ''}, {v: 18869} ]},
    { c:[ {v: new Date(1400162401000)}, {v: 4144427}, {v: 4932773}, {v: ''}, {v: 4929674}, {v: ''}, {v: 17673} ]},
    { c:[ {v: new Date(1400166001000)}, {v: 4150213}, {v: 4944523}, {v: ''}, {v: 4946433}, {v: ''}, {v: 16759} ]},
    { c:[ {v: new Date(1400169601000)}, {v: 4155954}, {v: 4956216}, {v: ''}, {v: 4961896}, {v: ''}, {v: 15463} ]},
    { c:[ {v: new Date(1400173201000)}, {v: 4161653}, {v: 4967853}, {v: ''}, {v: 4979079}, {v: ''}, {v: 17183} ]},
    { c:[ {v: new Date(1400176801000)}, {v: 4167310}, {v: 4979435}, {v: ''}, {v: 4995340}, {v: ''}, {v: 16261} ]},
    { c:[ {v: new Date(1400180401000)}, {v: 4172925}, {v: 4990963}, {v: ''}, {v: 5006436}, {v: ''}, {v: 11096} ]},
    { c:[ {v: new Date(1400184001000)}, {v: 4178499}, {v: 5002437}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400187601000)}, {v: 4184032}, {v: 5013858}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400191201000)}, {v: 4189526}, {v: 5025226}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400194801000)}, {v: 4194980}, {v: 5036543}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400198401000)}, {v: 4200395}, {v: 5047808}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400202001000)}, {v: 4205773}, {v: 5059022}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400205601000)}, {v: 4211112}, {v: 5070186}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400209201000)}, {v: 4216415}, {v: 5081300}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400212801000)}, {v: 4221681}, {v: 5092366}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400216401000)}, {v: 4226911}, {v: 5103383}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400220001000)}, {v: 4232105}, {v: 5114352}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400223601000)}, {v: 4237264}, {v: 5125274}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400227201000)}, {v: 4242388}, {v: 5136148}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400230801000)}, {v: 4247478}, {v: 5146977}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400234401000)}, {v: 4252534}, {v: 5157759}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400238001000)}, {v: 4257557}, {v: 5168496}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400241601000)}, {v: 4262547}, {v: 5179188}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400245201000)}, {v: 4267505}, {v: 5189836}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400248801000)}, {v: 4272431}, {v: 5200440}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400252401000)}, {v: 4277325}, {v: 5211000}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400256001000)}, {v: 4282188}, {v: 5221517}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400259601000)}, {v: 4287020}, {v: 5231992}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400263201000)}, {v: 4291821}, {v: 5242424}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400266801000)}, {v: 4296593}, {v: 5252815}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400270401000)}, {v: 4301334}, {v: 5263164}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400274001000)}, {v: 4306047}, {v: 5273472}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400277601000)}, {v: 4310730}, {v: 5283740}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400281201000)}, {v: 4315385}, {v: 5293968}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400284801000)}, {v: 4320012}, {v: 5304156}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400288401000)}, {v: 4324611}, {v: 5314304}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400292001000)}, {v: 4329182}, {v: 5324414}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400295601000)}, {v: 4333726}, {v: 5334485}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400299201000)}, {v: 4338243}, {v: 5344518}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400302801000)}, {v: 4342734}, {v: 5354514}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400306401000)}, {v: 4347198}, {v: 5364471}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400310001000)}, {v: 4351636}, {v: 5374392}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400313601000)}, {v: 4356048}, {v: 5384276}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400317201000)}, {v: 4360435}, {v: 5394123}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400320801000)}, {v: 4364797}, {v: 5403935}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400324401000)}, {v: 4369135}, {v: 5413710}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400328001000)}, {v: 4373447}, {v: 5423451}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400331601000)}, {v: 4377736}, {v: 5433156}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400335201000)}, {v: 4382000}, {v: 5442826}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400338801000)}, {v: 4386241}, {v: 5452462}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400342401000)}, {v: 4390458}, {v: 5462064}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400346001000)}, {v: 4394652}, {v: 5471632}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400349601000)}, {v: 4398823}, {v: 5481166}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400353201000)}, {v: 4402971}, {v: 5490667}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400356801000)}, {v: 4407097}, {v: 5500135}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400360401000)}, {v: 4411201}, {v: 5509571}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400364001000)}, {v: 4415282}, {v: 5518974}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400367601000)}, {v: 4419342}, {v: 5528345}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400371201000)}, {v: 4423381}, {v: 5537684}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400374801000)}, {v: 4427398}, {v: 5546992}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400378401000)}, {v: 4431394}, {v: 5556268}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400382001000)}, {v: 4435370}, {v: 5565514}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400385601000)}, {v: 4439324}, {v: 5574728}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400389201000)}, {v: 4443258}, {v: 5583912}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400392801000)}, {v: 4447173}, {v: 5593066}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400396401000)}, {v: 4451067}, {v: 5602190}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400400001000)}, {v: 4454941}, {v: 5611284}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400403601000)}, {v: 4458796}, {v: 5620349}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400407201000)}, {v: 4462631}, {v: 5629384}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400410801000)}, {v: 4466447}, {v: 5638390}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400414401000)}, {v: 4470244}, {v: 5647368}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400418001000)}, {v: 4474022}, {v: 5656317}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400421601000)}, {v: 4477782}, {v: 5665237}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400425201000)}, {v: 4481523}, {v: 5674130}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400428801000)}, {v: 4485246}, {v: 5682994}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400432401000)}, {v: 4488951}, {v: 5691831}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400436001000)}, {v: 4492638}, {v: 5700641}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400439601000)}, {v: 4496307}, {v: 5709423}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400443201000)}, {v: 4499959}, {v: 5718178}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400446801000)}, {v: 4503593}, {v: 5726907}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400450401000)}, {v: 4507210}, {v: 5735609}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400454001000)}, {v: 4510810}, {v: 5744284}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400457601000)}, {v: 4514393}, {v: 5752933}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400461201000)}, {v: 4517959}, {v: 5761557}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400464801000)}, {v: 4521508}, {v: 5770154}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400468401000)}, {v: 4525041}, {v: 5778726}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400472001000)}, {v: 4528558}, {v: 5787272}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400475601000)}, {v: 4532059}, {v: 5795794}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400479201000)}, {v: 4535544}, {v: 5804290}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400482801000)}, {v: 4539012}, {v: 5812761}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400486401000)}, {v: 4542466}, {v: 5821208}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400490001000)}, {v: 4545903}, {v: 5829630}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400493601000)}, {v: 4549325}, {v: 5838028}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400497201000)}, {v: 4552732}, {v: 5846401}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400500801000)}, {v: 4556124}, {v: 5854751}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400504401000)}, {v: 4559500}, {v: 5863077}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400508001000)}, {v: 4562862}, {v: 5871379}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400511601000)}, {v: 4566209}, {v: 5879658}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400515201000)}, {v: 4569541}, {v: 5887914}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400518801000)}, {v: 4572859}, {v: 5896146}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400522401000)}, {v: 4576163}, {v: 5904356}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400526001000)}, {v: 4579452}, {v: 5912543}, {v:''}, {v: undefined}, {v: ''}, {v: undefined} ]},
]}
