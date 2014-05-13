var dataArray = [
["Time", "Prediction", "Prediction 2", "Current Prize","+Change"],
[new Date(1399712400000), 1825968, 1830969, 1856205, 0],
[new Date(1399716001000), 1938779, 1949644, 1933828, 77623],
[new Date(1399719601000), 2037002, 2045430, 2015464, 81636],
[new Date(1399723201000), 2124002, 2127882, 2092497, 77033],
[new Date(1399726801000), 2202083, 2201268, 2164615, 72118],
[new Date(1399730401000), 2272905, 2267961, 2270004, 105389],
[new Date(1399734001000), 2337703, 2329444, 2341462, 71458],
[new Date(1399737601000), 2397422, 2386719, 2409913, 68451],
[new Date(1399741201000), 2452801, 2440504, 2474671, 64758],
[new Date(1399744801000), 2504428, 2491331, 2522017, 47346],
[new Date(1399748401000), 2552779, 2539611, 2598168, 76151],
[new Date(1399752001000), 2598246, 2585666, 2634059, 35891],
[new Date(1399755601000), 2641153, 2629758, 2664469, 30410],
[new Date(1399759201000), 2681774, 2672100, 2689005, 24536],
[new Date(1399762801000), 2720339, 2712868, 2710971, 21966],
[new Date(1399766401000), 2757047, 2752212, 2749460, 38489],
[new Date(1399770001000), 2792068, 2790261, 2772216, 22756],
[new Date(1399773601000), 2825550, 2827122, 2796353, 24137],
[new Date(1399777201000), 2857624, 2862892, 2830980, 34627],
[new Date(1399780801000), 2888403, 2897653, 2864041, 33061],
[new Date(1399784401000), 2917987, 2931478, 2899710, 35669],
[new Date(1399788001000), 2946466, 2964432, 2931879, 32169],
[new Date(1399791601000), 2973919, 2996573, 2969297, 37418],
[new Date(1399795201000), 3000418, 3027952, 2999189, 29892],
[new Date(1399798801000), 3026026, 3058616, 3034064, 34875],
[new Date(1399802401000), 3050802, 3088607, 3070546, 36482],
[new Date(1399806001000), 3074799, 3117962, 3103423, 32877],
[new Date(1399809601000), 3098063, 3146718, 3144701, 41278],
[new Date(1399813201000), 3120638, 3174904, 3178892, 34191],
[new Date(1399816801000), 3142563, 3202550, 3221032, 42140],
[new Date(1399820401000), 3163876, 3229683, 3260090, 39058],
[new Date(1399824001000), 3184609, 3256327, 3294690, 34600],
[new Date(1399827601000), 3204793, 3282505, 3321705, 27015],
[new Date(1399831201000), 3224456, 3308238, 3347849, 26144],
[new Date(1399834801000), 3243625, 3333545, 3369811, 21962],
[new Date(1399838401000), 3262324, 3358444, 3386406, 16595],
[new Date(1399842001000), 3280575, 3382953, 3402400, 15994],
[new Date(1399845601000), 3298399, 3407087, 3414627, 12227],
[new Date(1399849201000), 3315817, 3430861, 3423787, 9160],
[new Date(1399852801000), 3332845, 3454289, 3433069, 9282],
[new Date(1399856401000), 3349501, 3477383, 3444297, 11228],
[new Date(1399860001000), 3365800, 3500156, 3456337, 12040],
[new Date(1399863601000), 3381759, 3522620, 3470379, 14042],
[new Date(1399867201000), 3397390, 3544785, 3485626, 15247],
[new Date(1399870801000), 3412708, 3566661, 3504298, 18672],
[new Date(1399874401000), 3427723, 3588258, 3520657, 16359],
[new Date(1399878001000), 3442449, 3609585, 3538239, 17582],
[new Date(1399881601000), 3456895, 3630651, 3557171, 18932],
[new Date(1399885201000), 3471073, 3651464, 3577714, 20543],
[new Date(1399888801000), 3484992, 3672032, 3599296, 21582],
[new Date(1399892402000), 3498665, 3692368, 3628764, 29468],
[new Date(1399896001000), 3512090, 3712462, 3662369, 33605],
[new Date(1399899601000), 3525286, 3732337, 3694489, 32120],
[new Date(1399903201000), 3538258, 3751995, 3726361, 31872],
[new Date(1399906801000), 3551012, 3771442, 3760800, 34439],
[new Date(1399910401000), 3563557, 3790683, 3786965, 26165],
[new Date(1399914001000), 3575899, 3809723, 3812450, 25485],
[new Date(1399917601000), 3588044, 3828569, 3835800, 23350],
[new Date(1399921201000), 3599998, 3847226, 3853684, 17884],
[new Date(1399924801000), 3611768, 3865698, 3867859, 14175],
[new Date(1399928401000), 3623359, 3883989, 3878135, 10276],
[new Date(1399932001000), 3634776, 3902105, 3888711, 10576],
[new Date(1399935601000), 3646025, 3920050, 3897213, 8502],
[new Date(1399939201000), 3657111, 3937828, 3906056, 8843],
[new Date(1399942801000), 3668037, 3955443, 3914609, 8553],
[new Date(1399946401000), 3678809, 3972898, 4017929, 103320],
[new Date(1399950001000), 3689431, 3990198, 4030696, 12767],
[new Date(1399953601000), 3699907, 4007346, 4044853, 14157],
[new Date(1399957201000), 3710241, 4024345, 4060995, 16142],
[new Date(1399960801000), 3720437, 4041199, 4076863, 15868],
[new Date(1399964401000), 3730498, 4057911, 4090646, 13783],
[new Date(1399968001000), 3740428, 4074483, 4105175, 14529],
[new Date(1399971601000), 3750231, 4090920, 4119496, 14321],
[new Date(1399975201000), 3759909, 4107223, undefined, undefined],
[new Date(1399978801000), 3769466, 4123395, undefined, undefined],
[new Date(1399982401000), 3778904, 4139440, undefined, undefined],
[new Date(1399986001000), 3788227, 4155360, undefined, undefined],
[new Date(1399989601000), 3797437, 4171157, undefined, undefined],
[new Date(1399993201000), 3806538, 4186833, undefined, undefined],
[new Date(1399996801000), 3815531, 4202392, undefined, undefined],
[new Date(1400000401000), 3824419, 4217834, undefined, undefined],
[new Date(1400004001000), 3833205, 4233164, undefined, undefined],
[new Date(1400007601000), 3841890, 4248381, undefined, undefined],
[new Date(1400011201000), 3850478, 4263490, undefined, undefined],
[new Date(1400014801000), 3858970, 4278491, undefined, undefined],
[new Date(1400018401000), 3867369, 4293387, undefined, undefined],
[new Date(1400022001000), 3875676, 4308179, undefined, undefined],
[new Date(1400025601000), 3883893, 4322869, undefined, undefined],
[new Date(1400029201000), 3892023, 4337460, undefined, undefined],
[new Date(1400032801000), 3900067, 4351952, undefined, undefined],
[new Date(1400036401000), 3908027, 4366348, undefined, undefined],
[new Date(1400040001000), 3915905, 4380650, undefined, undefined],
[new Date(1400043601000), 3923703, 4394857, undefined, undefined],
[new Date(1400047201000), 3931421, 4408974, undefined, undefined],
[new Date(1400050801000), 3939062, 4423000, undefined, undefined],
[new Date(1400054401000), 3946627, 4436937, undefined, undefined],
[new Date(1400058001000), 3954118, 4450787, undefined, undefined],
[new Date(1400061601000), 3961536, 4464551, undefined, undefined],
[new Date(1400065201000), 3968882, 4478231, undefined, undefined],
[new Date(1400068801000), 3976159, 4491827, undefined, undefined],
[new Date(1400072401000), 3983366, 4505341, undefined, undefined],
[new Date(1400076001000), 3990506, 4518775, undefined, undefined],
[new Date(1400079601000), 3997580, 4532129, undefined, undefined],
[new Date(1400083201000), 4004589, 4545405, undefined, undefined],
[new Date(1400086801000), 4011533, 4558604, undefined, undefined],
[new Date(1400090401000), 4018416, 4571727, undefined, undefined],
[new Date(1400094001000), 4025236, 4584775, undefined, undefined],
[new Date(1400097601000), 4031996, 4597749, undefined, undefined],
[new Date(1400101201000), 4038697, 4610651, undefined, undefined],
[new Date(1400104801000), 4045339, 4623481, undefined, undefined],
[new Date(1400108401000), 4051924, 4636240, undefined, undefined],
[new Date(1400112001000), 4058453, 4648930, undefined, undefined],
[new Date(1400115601000), 4064926, 4661550, undefined, undefined],
[new Date(1400119201000), 4071345, 4674104, undefined, undefined],
[new Date(1400122801000), 4077710, 4686590, undefined, undefined],
[new Date(1400126401000), 4084022, 4699010, undefined, undefined],
[new Date(1400130001000), 4090283, 4711366, undefined, undefined],
[new Date(1400133601000), 4096492, 4723657, undefined, undefined],
[new Date(1400137201000), 4102651, 4735885, undefined, undefined],
[new Date(1400140801000), 4108761, 4748050, undefined, undefined],
[new Date(1400144401000), 4114823, 4760154, undefined, undefined],
[new Date(1400148001000), 4120836, 4772196, undefined, undefined],
[new Date(1400151601000), 4126803, 4784179, undefined, undefined],
[new Date(1400155201000), 4132723, 4796102, undefined, undefined],
[new Date(1400158801000), 4138598, 4807967, undefined, undefined],
[new Date(1400162401000), 4144427, 4819773, undefined, undefined],
[new Date(1400166001000), 4150213, 4831523, undefined, undefined],
[new Date(1400169601000), 4155954, 4843216, undefined, undefined],
[new Date(1400173201000), 4161653, 4854853, undefined, undefined],
[new Date(1400176801000), 4167310, 4866435, undefined, undefined],
[new Date(1400180401000), 4172925, 4877963, undefined, undefined],
[new Date(1400184001000), 4178499, 4889437, undefined, undefined],
[new Date(1400187601000), 4184032, 4900858, undefined, undefined],
[new Date(1400191201000), 4189526, 4912226, undefined, undefined],
[new Date(1400194801000), 4194980, 4923543, undefined, undefined],
[new Date(1400198401000), 4200395, 4934808, undefined, undefined],
[new Date(1400202001000), 4205773, 4946022, undefined, undefined],
[new Date(1400205601000), 4211112, 4957186, undefined, undefined],
[new Date(1400209201000), 4216415, 4968300, undefined, undefined],
[new Date(1400212801000), 4221681, 4979366, undefined, undefined],
[new Date(1400216401000), 4226911, 4990383, undefined, undefined],
[new Date(1400220001000), 4232105, 5001352, undefined, undefined],
[new Date(1400223601000), 4237264, 5012274, undefined, undefined],
[new Date(1400227201000), 4242388, 5023148, undefined, undefined],
[new Date(1400230801000), 4247478, 5033977, undefined, undefined],
[new Date(1400234401000), 4252534, 5044759, undefined, undefined],
[new Date(1400238001000), 4257557, 5055496, undefined, undefined],
[new Date(1400241601000), 4262547, 5066188, undefined, undefined],
[new Date(1400245201000), 4267505, 5076836, undefined, undefined],
[new Date(1400248801000), 4272431, 5087440, undefined, undefined],
[new Date(1400252401000), 4277325, 5098000, undefined, undefined],
[new Date(1400256001000), 4282188, 5108517, undefined, undefined],
[new Date(1400259601000), 4287020, 5118992, undefined, undefined],
[new Date(1400263201000), 4291821, 5129424, undefined, undefined],
[new Date(1400266801000), 4296593, 5139815, undefined, undefined],
[new Date(1400270401000), 4301334, 5150164, undefined, undefined],
[new Date(1400274001000), 4306047, 5160472, undefined, undefined],
[new Date(1400277601000), 4310730, 5170740, undefined, undefined],
[new Date(1400281201000), 4315385, 5180968, undefined, undefined],
[new Date(1400284801000), 4320012, 5191156, undefined, undefined],
[new Date(1400288401000), 4324611, 5201304, undefined, undefined],
[new Date(1400292001000), 4329182, 5211414, undefined, undefined],
[new Date(1400295601000), 4333726, 5221485, undefined, undefined],
[new Date(1400299201000), 4338243, 5231518, undefined, undefined],
[new Date(1400302801000), 4342734, 5241514, undefined, undefined],
[new Date(1400306401000), 4347198, 5251471, undefined, undefined],
[new Date(1400310001000), 4351636, 5261392, undefined, undefined],
[new Date(1400313601000), 4356048, 5271276, undefined, undefined],
[new Date(1400317201000), 4360435, 5281123, undefined, undefined],
]
