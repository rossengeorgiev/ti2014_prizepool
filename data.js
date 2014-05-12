var dataArray = [
["Time", "Prediction", "Prize"],
[new Date(1399712400000), 1825968, 1856205],
[new Date(1399716001000), 1938779, 1933828],
[new Date(1399719601000), 2037002, 2015464],
[new Date(1399723201000), 2124002, 2092497],
[new Date(1399726801000), 2202083, 2164615],
[new Date(1399730401000), 2272905, 2270004],
[new Date(1399734001000), 2337703, 2341462],
[new Date(1399737601000), 2397422, 2409913],
[new Date(1399741201000), 2452801, 2474671],
[new Date(1399744801000), 2504428, 2522017],
[new Date(1399748401000), 2552779, 2598168],
[new Date(1399752001000), 2598246, 2634059],
[new Date(1399755601000), 2641153, 2664469],
[new Date(1399759201000), 2681774, 2689005],
[new Date(1399762801000), 2720339, 2710971],
[new Date(1399766401000), 2757047, 2749460],
[new Date(1399770001000), 2792068, 2772216],
[new Date(1399773601000), 2825550, 2796353],
[new Date(1399777201000), 2857624, 2830980],
[new Date(1399780801000), 2888403, 2864041],
[new Date(1399784401000), 2917987, 2899710],
[new Date(1399788001000), 2946466, 2931879],
[new Date(1399791601000), 2973919, 2969297],
[new Date(1399795201000), 3000418, 2999189],
[new Date(1399798801000), 3026026, 3034064],
[new Date(1399802401000), 3050802, 3070546],
[new Date(1399806001000), 3074799, 3103423],
[new Date(1399809601000), 3098063, 3144701],
[new Date(1399813201000), 3120638, 3178892],
[new Date(1399816801000), 3142563, 3221032],
[new Date(1399820401000), 3163876, 3260090],
[new Date(1399824001000), 3184609, 3294690],
[new Date(1399827601000), 3204793, 3321705],
[new Date(1399831201000), 3224456, 3347849],
[new Date(1399834801000), 3243625, 3369811],
[new Date(1399838401000), 3262324, 3386406],
[new Date(1399842001000), 3280575, 3402400],
[new Date(1399845601000), 3298399, 3414627],
[new Date(1399849201000), 3315817, 3423787],
[new Date(1399852801000), 3332845, 3433069],
[new Date(1399856401000), 3349501, undefined],
[new Date(1399860001000), 3365800, undefined],
[new Date(1399863601000), 3381759, undefined],
[new Date(1399867201000), 3397390, undefined],
[new Date(1399870801000), 3412708, undefined],
[new Date(1399874401000), 3427723, undefined],
[new Date(1399878001000), 3442449, undefined],
[new Date(1399881601000), 3456895, undefined],
[new Date(1399885201000), 3471073, undefined],
[new Date(1399888801000), 3484992, undefined],
[new Date(1399892401000), 3498662, undefined],
[new Date(1399896001000), 3512090, undefined],
[new Date(1399899601000), 3525286, undefined],
[new Date(1399903201000), 3538258, undefined],
[new Date(1399906801000), 3551012, undefined],
[new Date(1399910401000), 3563557, undefined],
[new Date(1399914001000), 3575899, undefined],
[new Date(1399917601000), 3588044, undefined],
[new Date(1399921201000), 3599998, undefined],
[new Date(1399924801000), 3611768, undefined],
[new Date(1399928401000), 3623359, undefined],
[new Date(1399932001000), 3634776, undefined],
[new Date(1399935601000), 3646025, undefined],
[new Date(1399939201000), 3657111, undefined],
[new Date(1399942801000), 3668037, undefined],
[new Date(1399946401000), 3678809, undefined],
[new Date(1399950001000), 3689431, undefined],
[new Date(1399953601000), 3699907, undefined],
[new Date(1399957201000), 3710241, undefined],
[new Date(1399960801000), 3720437, undefined],
[new Date(1399964401000), 3730498, undefined],
[new Date(1399968001000), 3740428, undefined],
[new Date(1399971601000), 3750231, undefined],
[new Date(1399975201000), 3759909, undefined],
[new Date(1399978801000), 3769466, undefined],
[new Date(1399982401000), 3778904, undefined],
[new Date(1399986001000), 3788227, undefined],
[new Date(1399989601000), 3797437, undefined],
[new Date(1399993201000), 3806538, undefined],
[new Date(1399996801000), 3815531, undefined],
[new Date(1400000401000), 3824419, undefined],
[new Date(1400004001000), 3833205, undefined],
[new Date(1400007601000), 3841890, undefined],
[new Date(1400011201000), 3850478, undefined],
[new Date(1400014801000), 3858970, undefined],
[new Date(1400018401000), 3867369, undefined],
[new Date(1400022001000), 3875676, undefined],
[new Date(1400025601000), 3883893, undefined],
[new Date(1400029201000), 3892023, undefined],
[new Date(1400032801000), 3900067, undefined],
[new Date(1400036401000), 3908027, undefined],
[new Date(1400040001000), 3915905, undefined],
[new Date(1400043601000), 3923703, undefined],
[new Date(1400047201000), 3931421, undefined],
[new Date(1400050801000), 3939062, undefined],
[new Date(1400054401000), 3946627, undefined],
[new Date(1400058001000), 3954118, undefined],
[new Date(1400061601000), 3961536, undefined],
[new Date(1400065201000), 3968882, undefined],
[new Date(1400068801000), 3976159, undefined],
[new Date(1400072401000), 3983366, undefined],
[new Date(1400076001000), 3990506, undefined],
[new Date(1400079601000), 3997580, undefined],
[new Date(1400083201000), 4004589, undefined],
[new Date(1400086801000), 4011533, undefined],
[new Date(1400090401000), 4018416, undefined],
[new Date(1400094001000), 4025236, undefined],
[new Date(1400097601000), 4031996, undefined],
[new Date(1400101201000), 4038697, undefined],
[new Date(1400104801000), 4045339, undefined],
[new Date(1400108401000), 4051924, undefined],
[new Date(1400112001000), 4058453, undefined],
[new Date(1400115601000), 4064926, undefined],
[new Date(1400119201000), 4071345, undefined],
[new Date(1400122801000), 4077710, undefined],
[new Date(1400126401000), 4084022, undefined],
[new Date(1400130001000), 4090283, undefined],
[new Date(1400133601000), 4096492, undefined],
[new Date(1400137201000), 4102651, undefined],
[new Date(1400140801000), 4108761, undefined],
[new Date(1400144401000), 4114823, undefined],
[new Date(1400148001000), 4120836, undefined],
[new Date(1400151601000), 4126803, undefined],
[new Date(1400155201000), 4132723, undefined],
[new Date(1400158801000), 4138598, undefined],
[new Date(1400162401000), 4144427, undefined],
[new Date(1400166001000), 4150213, undefined],
[new Date(1400169601000), 4155954, undefined],
[new Date(1400173201000), 4161653, undefined],
[new Date(1400176801000), 4167310, undefined],
[new Date(1400180401000), 4172925, undefined],
[new Date(1400184001000), 4178499, undefined],
[new Date(1400187601000), 4184032, undefined],
[new Date(1400191201000), 4189526, undefined],
[new Date(1400194801000), 4194980, undefined],
[new Date(1400198401000), 4200395, undefined],
[new Date(1400202001000), 4205773, undefined],
[new Date(1400205601000), 4211112, undefined],
[new Date(1400209201000), 4216415, undefined],
[new Date(1400212801000), 4221681, undefined],
[new Date(1400216401000), 4226911, undefined],
[new Date(1400220001000), 4232105, undefined],
[new Date(1400223601000), 4237264, undefined],
[new Date(1400227201000), 4242388, undefined],
[new Date(1400230801000), 4247478, undefined],
[new Date(1400234401000), 4252534, undefined],
[new Date(1400238001000), 4257557, undefined],
[new Date(1400241601000), 4262547, undefined],
[new Date(1400245201000), 4267505, undefined],
[new Date(1400248801000), 4272431, undefined],
[new Date(1400252401000), 4277325, undefined],
[new Date(1400256001000), 4282188, undefined],
[new Date(1400259601000), 4287020, undefined],
[new Date(1400263201000), 4291821, undefined],
[new Date(1400266801000), 4296593, undefined],
[new Date(1400270401000), 4301334, undefined],
[new Date(1400274001000), 4306047, undefined],
[new Date(1400277601000), 4310730, undefined],
[new Date(1400281201000), 4315385, undefined],
[new Date(1400284801000), 4320012, undefined],
]
