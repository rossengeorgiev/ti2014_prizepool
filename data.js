
var dataObj = {
cols: [
    {id: 'ts',      label: 'Localtime',     type: 'date'},
    {id: 'p1',      label: 'Prediction #1',    type: 'number'},
    {id: 'p2',      label: 'Prediction #2',  type: 'number'},
    {id: 'prize',   label: 'Current Prize', type: 'number'},
    {id: 'prize_an',                        type: 'string', role:'annotation'},
    {id: 'change',  label: '+Change',       type: 'number'}
],
rows: [
    { c:[ {v: new Date(1399712400000)}, {v: 1825968}, {v: 1830969}, {v: 1856205}, {v: ''}, {v: 0} ]},
    { c:[ {v: new Date(1399716001000)}, {v: 1938779}, {v: 1949644}, {v: 1933828}, {v: ''}, {v: 77623} ]},
    { c:[ {v: new Date(1399719601000)}, {v: 2037002}, {v: 2045430}, {v: 2015464}, {v: ''}, {v: 81636} ]},
    { c:[ {v: new Date(1399723201000)}, {v: 2124002}, {v: 2127882}, {v: 2092497}, {v: ''}, {v: 77033} ]},
    { c:[ {v: new Date(1399726801000)}, {v: 2202083}, {v: 2201268}, {v: 2164615}, {v: ''}, {v: 72118} ]},
    { c:[ {v: new Date(1399730401000)}, {v: 2272905}, {v: 2267961}, {v: 2270004}, {v: ''}, {v: 105389} ]},
    { c:[ {v: new Date(1399734001000)}, {v: 2337703}, {v: 2329444}, {v: 2341462}, {v: ''}, {v: 71458} ]},
    { c:[ {v: new Date(1399737601000)}, {v: 2397422}, {v: 2386719}, {v: 2409913}, {v: ''}, {v: 68451} ]},
    { c:[ {v: new Date(1399741201000)}, {v: 2452801}, {v: 2440504}, {v: 2474671}, {v: ''}, {v: 64758} ]},
    { c:[ {v: new Date(1399744801000)}, {v: 2504428}, {v: 2491331}, {v: 2522017}, {v: ''}, {v: 47346} ]},
    { c:[ {v: new Date(1399748401000)}, {v: 2552779}, {v: 2539611}, {v: 2598168}, {v: ''}, {v: 76151} ]},
    { c:[ {v: new Date(1399752001000)}, {v: 2598246}, {v: 2585666}, {v: 2634059}, {v: ''}, {v: 35891} ]},
    { c:[ {v: new Date(1399755601000)}, {v: 2641153}, {v: 2629758}, {v: 2664469}, {v: ''}, {v: 30410} ]},
    { c:[ {v: new Date(1399759201000)}, {v: 2681774}, {v: 2672100}, {v: 2689005}, {v: ''}, {v: 24536} ]},
    { c:[ {v: new Date(1399762801000)}, {v: 2720339}, {v: 2712868}, {v: 2710971}, {v: ''}, {v: 21966} ]},
    { c:[ {v: new Date(1399766401000)}, {v: 2757047}, {v: 2752212}, {v: 2749460}, {v: ''}, {v: 38489} ]},
    { c:[ {v: new Date(1399770001000)}, {v: 2792068}, {v: 2790261}, {v: 2772216}, {v: ''}, {v: 22756} ]},
    { c:[ {v: new Date(1399773601000)}, {v: 2825550}, {v: 2827122}, {v: 2796353}, {v: ''}, {v: 24137} ]},
    { c:[ {v: new Date(1399777201000)}, {v: 2857624}, {v: 2862892}, {v: 2830980}, {v: ''}, {v: 34627} ]},
    { c:[ {v: new Date(1399780801000)}, {v: 2888403}, {v: 2897653}, {v: 2864041}, {v: ''}, {v: 33061} ]},
    { c:[ {v: new Date(1399784401000)}, {v: 2917987}, {v: 2931478}, {v: 2899710}, {v: ''}, {v: 35669} ]},
    { c:[ {v: new Date(1399788001000)}, {v: 2946466}, {v: 2964432}, {v: 2931879}, {v: ''}, {v: 32169} ]},
    { c:[ {v: new Date(1399791601000)}, {v: 2973919}, {v: 2996573}, {v: 2969297}, {v: ''}, {v: 37418} ]},
    { c:[ {v: new Date(1399795201000)}, {v: 3000418}, {v: 3027952}, {v: 2999189}, {v: 'Prediction #1'}, {v: 29892} ]},
    { c:[ {v: new Date(1399798801000)}, {v: 3026026}, {v: 3058616}, {v: 3034064}, {v: ''}, {v: 34875} ]},
    { c:[ {v: new Date(1399802401000)}, {v: 3050802}, {v: 3088607}, {v: 3070546}, {v: ''}, {v: 36482} ]},
    { c:[ {v: new Date(1399806001000)}, {v: 3074799}, {v: 3117962}, {v: 3103423}, {v: ''}, {v: 32877} ]},
    { c:[ {v: new Date(1399809601000)}, {v: 3098063}, {v: 3146718}, {v: 3144701}, {v: ''}, {v: 41278} ]},
    { c:[ {v: new Date(1399813201000)}, {v: 3120638}, {v: 3174904}, {v: 3178892}, {v: ''}, {v: 34191} ]},
    { c:[ {v: new Date(1399816801000)}, {v: 3142563}, {v: 3202550}, {v: 3221032}, {v: ''}, {v: 42140} ]},
    { c:[ {v: new Date(1399820401000)}, {v: 3163876}, {v: 3229683}, {v: 3260090}, {v: ''}, {v: 39058} ]},
    { c:[ {v: new Date(1399824001000)}, {v: 3184609}, {v: 3256327}, {v: 3294690}, {v: ''}, {v: 34600} ]},
    { c:[ {v: new Date(1399827601000)}, {v: 3204793}, {v: 3282505}, {v: 3321705}, {v: ''}, {v: 27015} ]},
    { c:[ {v: new Date(1399831201000)}, {v: 3224456}, {v: 3308238}, {v: 3347849}, {v: ''}, {v: 26144} ]},
    { c:[ {v: new Date(1399834801000)}, {v: 3243625}, {v: 3333545}, {v: 3369811}, {v: ''}, {v: 21962} ]},
    { c:[ {v: new Date(1399838401000)}, {v: 3262324}, {v: 3358444}, {v: 3386406}, {v: ''}, {v: 16595} ]},
    { c:[ {v: new Date(1399842001000)}, {v: 3280575}, {v: 3382953}, {v: 3402400}, {v: ''}, {v: 15994} ]},
    { c:[ {v: new Date(1399845601000)}, {v: 3298399}, {v: 3407087}, {v: 3414627}, {v: ''}, {v: 12227} ]},
    { c:[ {v: new Date(1399849201000)}, {v: 3315817}, {v: 3430861}, {v: 3423787}, {v: ''}, {v: 9160} ]},
    { c:[ {v: new Date(1399852801000)}, {v: 3332845}, {v: 3454289}, {v: 3433069}, {v: ''}, {v: 9282} ]},
    { c:[ {v: new Date(1399856401000)}, {v: 3349501}, {v: 3477383}, {v: 3444297}, {v: ''}, {v: 11228} ]},
    { c:[ {v: new Date(1399860001000)}, {v: 3365800}, {v: 3500156}, {v: 3456337}, {v: ''}, {v: 12040} ]},
    { c:[ {v: new Date(1399863601000)}, {v: 3381759}, {v: 3522620}, {v: 3470379}, {v: ''}, {v: 14042} ]},
    { c:[ {v: new Date(1399867201000)}, {v: 3397390}, {v: 3544785}, {v: 3485626}, {v: ''}, {v: 15247} ]},
    { c:[ {v: new Date(1399870801000)}, {v: 3412708}, {v: 3566661}, {v: 3504298}, {v: ''}, {v: 18672} ]},
    { c:[ {v: new Date(1399874401000)}, {v: 3427723}, {v: 3588258}, {v: 3520657}, {v: ''}, {v: 16359} ]},
    { c:[ {v: new Date(1399878001000)}, {v: 3442449}, {v: 3609585}, {v: 3538239}, {v: ''}, {v: 17582} ]},
    { c:[ {v: new Date(1399881601000)}, {v: 3456895}, {v: 3630651}, {v: 3557171}, {v: ''}, {v: 18932} ]},
    { c:[ {v: new Date(1399885201000)}, {v: 3471073}, {v: 3651464}, {v: 3577714}, {v: ''}, {v: 20543} ]},
    { c:[ {v: new Date(1399888801000)}, {v: 3484992}, {v: 3672032}, {v: 3599296}, {v: ''}, {v: 21582} ]},
    { c:[ {v: new Date(1399892402000)}, {v: 3498665}, {v: 3692368}, {v: 3628764}, {v: ''}, {v: 29468} ]},
    { c:[ {v: new Date(1399896001000)}, {v: 3512090}, {v: 3712462}, {v: 3662369}, {v: ''}, {v: 33605} ]},
    { c:[ {v: new Date(1399899601000)}, {v: 3525286}, {v: 3732337}, {v: 3694489}, {v: ''}, {v: 32120} ]},
    { c:[ {v: new Date(1399903201000)}, {v: 3538258}, {v: 3751995}, {v: 3726361}, {v: ''}, {v: 31872} ]},
    { c:[ {v: new Date(1399906801000)}, {v: 3551012}, {v: 3771442}, {v: 3760800}, {v: ''}, {v: 34439} ]},
    { c:[ {v: new Date(1399910401000)}, {v: 3563557}, {v: 3790683}, {v: 3786965}, {v: ''}, {v: 26165} ]},
    { c:[ {v: new Date(1399914001000)}, {v: 3575899}, {v: 3809723}, {v: 3812450}, {v: ''}, {v: 25485} ]},
    { c:[ {v: new Date(1399917601000)}, {v: 3588044}, {v: 3828569}, {v: 3835800}, {v: ''}, {v: 23350} ]},
    { c:[ {v: new Date(1399921201000)}, {v: 3599998}, {v: 3847226}, {v: 3853684}, {v: ''}, {v: 17884} ]},
    { c:[ {v: new Date(1399924801000)}, {v: 3611768}, {v: 3865698}, {v: 3867859}, {v: ''}, {v: 14175} ]},
    { c:[ {v: new Date(1399928401000)}, {v: 3623359}, {v: 3883989}, {v: 3878135}, {v: 'Prediction #2'}, {v: 10276} ]},
    { c:[ {v: new Date(1399932001000)}, {v: 3634776}, {v: 3902105}, {v: 3888711}, {v: ''}, {v: 10576} ]},
    { c:[ {v: new Date(1399935601000)}, {v: 3646025}, {v: 3920050}, {v: 3897213}, {v: ''}, {v: 8502} ]},
    { c:[ {v: new Date(1399939201000)}, {v: 3657111}, {v: 3937828}, {v: 3906056}, {v: ''}, {v: 8843} ]},
    { c:[ {v: new Date(1399942801000)}, {v: 3668037}, {v: 3955443}, {v: 3914609}, {v: ''}, {v: 8553} ]},
    { c:[ {v: new Date(1399946401000)}, {v: 3678809}, {v: 3972898}, {v: 4017929}, {v: ''}, {v: 103320} ]},
    { c:[ {v: new Date(1399950001000)}, {v: 3689431}, {v: 3990198}, {v: 4030696}, {v: ''}, {v: 12767} ]},
    { c:[ {v: new Date(1399953601000)}, {v: 3699907}, {v: 4007346}, {v: 4044853}, {v: ''}, {v: 14157} ]},
    { c:[ {v: new Date(1399957201000)}, {v: 3710241}, {v: 4024345}, {v: 4060995}, {v: ''}, {v: 16142} ]},
    { c:[ {v: new Date(1399960801000)}, {v: 3720437}, {v: 4041199}, {v: 4076863}, {v: ''}, {v: 15868} ]},
    { c:[ {v: new Date(1399964401000)}, {v: 3730498}, {v: 4057911}, {v: 4090646}, {v: ''}, {v: 13783} ]},
    { c:[ {v: new Date(1399968001000)}, {v: 3740428}, {v: 4074483}, {v: 4105175}, {v: ''}, {v: 14529} ]},
    { c:[ {v: new Date(1399971601000)}, {v: 3750231}, {v: 4090920}, {v: 4119496}, {v: ''}, {v: 14321} ]},
    { c:[ {v: new Date(1399975201000)}, {v: 3759909}, {v: 4107223}, {v: 4138025}, {v: ''}, {v: 18529} ]},
    { c:[ {v: new Date(1399978801000)}, {v: 3769466}, {v: 4123395}, {v: 4160429}, {v: ''}, {v: 22404} ]},
    { c:[ {v: new Date(1399982401000)}, {v: 3778904}, {v: 4139440}, {v: 4186269}, {v: ''}, {v: 25840} ]},
    { c:[ {v: new Date(1399986001000)}, {v: 3788227}, {v: 4155360}, {v: 4210368}, {v: ''}, {v: 24099} ]},
    { c:[ {v: new Date(1399989601000)}, {v: 3797437}, {v: 4171157}, {v: 4234555}, {v: ''}, {v: 24187} ]},
    { c:[ {v: new Date(1399993201000)}, {v: 3806538}, {v: 4186833}, {v: 4258338}, {v: ''}, {v: 23783} ]},
    { c:[ {v: new Date(1399996801000)}, {v: 3815531}, {v: 4202392}, {v: 4283198}, {v: ''}, {v: 24860} ]},
    { c:[ {v: new Date(1400000401000)}, {v: 3824419}, {v: 4217834}, {v: 4303015}, {v: ''}, {v: 19817} ]},
    { c:[ {v: new Date(1400004001000)}, {v: 3833205}, {v: 4233164}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400007601000)}, {v: 3841890}, {v: 4248381}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400011201000)}, {v: 3850478}, {v: 4263490}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400014801000)}, {v: 3858970}, {v: 4278491}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400018401000)}, {v: 3867369}, {v: 4293387}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400022001000)}, {v: 3875676}, {v: 4308179}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400025601000)}, {v: 3883893}, {v: 4322869}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400029201000)}, {v: 3892023}, {v: 4337460}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400032801000)}, {v: 3900067}, {v: 4351952}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400036401000)}, {v: 3908027}, {v: 4366348}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400040001000)}, {v: 3915905}, {v: 4380650}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400043601000)}, {v: 3923703}, {v: 4394857}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400047201000)}, {v: 3931421}, {v: 4408974}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400050801000)}, {v: 3939062}, {v: 4423000}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400054401000)}, {v: 3946627}, {v: 4436937}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400058001000)}, {v: 3954118}, {v: 4450787}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400061601000)}, {v: 3961536}, {v: 4464551}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400065201000)}, {v: 3968882}, {v: 4478231}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400068801000)}, {v: 3976159}, {v: 4491827}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400072401000)}, {v: 3983366}, {v: 4505341}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400076001000)}, {v: 3990506}, {v: 4518775}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400079601000)}, {v: 3997580}, {v: 4532129}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400083201000)}, {v: 4004589}, {v: 4545405}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400086801000)}, {v: 4011533}, {v: 4558604}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400090401000)}, {v: 4018416}, {v: 4571727}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400094001000)}, {v: 4025236}, {v: 4584775}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400097601000)}, {v: 4031996}, {v: 4597749}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400101201000)}, {v: 4038697}, {v: 4610651}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400104801000)}, {v: 4045339}, {v: 4623481}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400108401000)}, {v: 4051924}, {v: 4636240}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400112001000)}, {v: 4058453}, {v: 4648930}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400115601000)}, {v: 4064926}, {v: 4661550}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400119201000)}, {v: 4071345}, {v: 4674104}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400122801000)}, {v: 4077710}, {v: 4686590}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400126401000)}, {v: 4084022}, {v: 4699010}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400130001000)}, {v: 4090283}, {v: 4711366}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400133601000)}, {v: 4096492}, {v: 4723657}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400137201000)}, {v: 4102651}, {v: 4735885}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400140801000)}, {v: 4108761}, {v: 4748050}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400144401000)}, {v: 4114823}, {v: 4760154}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400148001000)}, {v: 4120836}, {v: 4772196}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400151601000)}, {v: 4126803}, {v: 4784179}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400155201000)}, {v: 4132723}, {v: 4796102}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400158801000)}, {v: 4138598}, {v: 4807967}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400162401000)}, {v: 4144427}, {v: 4819773}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400166001000)}, {v: 4150213}, {v: 4831523}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400169601000)}, {v: 4155954}, {v: 4843216}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400173201000)}, {v: 4161653}, {v: 4854853}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400176801000)}, {v: 4167310}, {v: 4866435}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400180401000)}, {v: 4172925}, {v: 4877963}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400184001000)}, {v: 4178499}, {v: 4889437}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400187601000)}, {v: 4184032}, {v: 4900858}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400191201000)}, {v: 4189526}, {v: 4912226}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400194801000)}, {v: 4194980}, {v: 4923543}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400198401000)}, {v: 4200395}, {v: 4934808}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400202001000)}, {v: 4205773}, {v: 4946022}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400205601000)}, {v: 4211112}, {v: 4957186}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400209201000)}, {v: 4216415}, {v: 4968300}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400212801000)}, {v: 4221681}, {v: 4979366}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400216401000)}, {v: 4226911}, {v: 4990383}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400220001000)}, {v: 4232105}, {v: 5001352}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400223601000)}, {v: 4237264}, {v: 5012274}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400227201000)}, {v: 4242388}, {v: 5023148}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400230801000)}, {v: 4247478}, {v: 5033977}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400234401000)}, {v: 4252534}, {v: 5044759}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400238001000)}, {v: 4257557}, {v: 5055496}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400241601000)}, {v: 4262547}, {v: 5066188}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400245201000)}, {v: 4267505}, {v: 5076836}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400248801000)}, {v: 4272431}, {v: 5087440}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400252401000)}, {v: 4277325}, {v: 5098000}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400256001000)}, {v: 4282188}, {v: 5108517}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400259601000)}, {v: 4287020}, {v: 5118992}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400263201000)}, {v: 4291821}, {v: 5129424}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400266801000)}, {v: 4296593}, {v: 5139815}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400270401000)}, {v: 4301334}, {v: 5150164}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400274001000)}, {v: 4306047}, {v: 5160472}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400277601000)}, {v: 4310730}, {v: 5170740}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400281201000)}, {v: 4315385}, {v: 5180968}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400284801000)}, {v: 4320012}, {v: 5191156}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400288401000)}, {v: 4324611}, {v: 5201304}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400292001000)}, {v: 4329182}, {v: 5211414}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400295601000)}, {v: 4333726}, {v: 5221485}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400299201000)}, {v: 4338243}, {v: 5231518}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400302801000)}, {v: 4342734}, {v: 5241514}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400306401000)}, {v: 4347198}, {v: 5251471}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400310001000)}, {v: 4351636}, {v: 5261392}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400313601000)}, {v: 4356048}, {v: 5271276}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400317201000)}, {v: 4360435}, {v: 5281123}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400320801000)}, {v: 4364797}, {v: 5290935}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400324401000)}, {v: 4369135}, {v: 5300710}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400328001000)}, {v: 4373447}, {v: 5310451}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400331601000)}, {v: 4377736}, {v: 5320156}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400335201000)}, {v: 4382000}, {v: 5329826}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400338801000)}, {v: 4386241}, {v: 5339462}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400342401000)}, {v: 4390458}, {v: 5349064}, {v: undefined}, {v: ''}, {v: undefined} ]},
    { c:[ {v: new Date(1400346001000)}, {v: 4394652}, {v: 5358632}, {v: undefined}, {v: ''}, {v: undefined} ]},
]}
