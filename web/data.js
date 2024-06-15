const data = [
    ["Afghanistan","阿富汗","as"],
    ["Azerbaijan","阿塞拜疆","as"],
    ["Bahrain","巴林","as"],
    ["Bangladesh","孟加拉国","as"],
    ["Armenia","亚美尼亚","as"],
    ["Bhutan","不丹","as"],
    ["Brunei Darussalam","文莱","as"],
    ["Myanmar","缅甸","as"],
    ["Cambodia","柬埔寨","as"],
    ["Sri Lanka","斯里兰卡","as"],
    ["China","中国","as"],
    ["China, Taiwan Province of China","中国台湾省","as"],
    ["Cyprus","塞浦路斯","as"],
    ["Georgia","格鲁吉亚","as"],
    ["State of Palestine","巴勒斯坦","as"],
    ["China, Hong Kong SAR","中国香港特别行政区","as"],
    ["India","印度","as"],
    ["Indonesia","印度尼西亚","as"],
    ["Iran (Islamic Republic of)","伊朗","as"],
    ["Iraq","伊拉克","as"],
    ["Israel","以色列","as"],
    ["Japan","日本","as"],
    ["Kazakhstan","哈萨克斯坦","as"],
    ["Jordan","约旦","as"],
    ["Dem. People's Rep. of Korea","朝鲜","as"],
    ["Republic of Korea","韩国","as"],
    ["Kuwait","科威特","as"],
    ["Kyrgyzstan","吉尔吉斯斯坦","as"],
    ["Lao People's Dem. Republic","老挝","as"],
    ["Lebanon","黎巴嫩","as"],
    ["China, Macao SAR","中国澳门特别行政区","as"],
    ["Malaysia","马来西亚","as"],
    ["Maldives","马尔代夫","as"],
    ["Mongolia","蒙古","as"],
    ["Oman","阿曼","as"],
    ["Nepal","尼泊尔","as"],
    ["Pakistan","巴基斯坦","as"],
    ["Philippines","菲律宾","as"],
    ["Timor-Leste","东帝汶","as"],
    ["Qatar","卡塔尔","as"],
    ["Saudi Arabia","沙特阿拉伯","as"],
    ["Singapore","新加坡","as"],
    ["Viet Nam","越南","as"],
    ["Syrian Arab Republic","叙利亚","as"],
    ["Tajikistan","塔吉克斯坦","as"],
    ["Thailand","泰国","as"],
    ["United Arab Emirates","阿联酋","as"],
    ["Türkiye","土耳其","as"],
    ["Turkmenistan","土库曼斯坦","as"],
    ["Uzbekistan","乌兹别克斯坦","as"],
    ["Yemen","也门","as"],
    ["Algeria","阿尔及利亚","af"],
    ["Angola","安哥拉","af"],
    ["Botswana","博茨瓦纳","af"],
    ["Burundi","布隆迪","af"],
    ["Cameroon","喀麦隆","af"],
    ["Cabo Verde","佛得角","af"],
    ["Central African Republic","中非共和国","af"],
    ["Chad","乍得","af"],
    ["Comoros","科摩罗","af"],
    ["Mayotte","马约特","af"],
    ["Congo","刚果","af"],
    ["Dem. Rep. of the Congo","刚果民主共和国","af"],
    ["Benin","贝宁","af"],
    ["Equatorial Guinea","赤道几内亚","af"],
    ["Ethiopia","埃塞俄比亚","af"],
    ["Eritrea","厄立特里亚","af"],
    ["Djibouti","吉布提","af"],
    ["Gabon","加蓬","af"],
    ["Gambia","冈比亚","af"],
    ["Ghana","加纳","af"],
    ["Guinea","几内亚","af"],
    ["Côte d'Ivoire","科特迪瓦","af"],
    ["Kenya","肯尼亚","af"],
    ["Lesotho","莱索托","af"],
    ["Liberia","利比里亚","af"],
    ["Libya","利比亚","af"],
    ["Madagascar","马达加斯加","af"],
    ["Malawi","马拉维","af"],
    ["Mali","马里","af"],
    ["Mauritania","毛里塔尼亚","af"],
    ["Mauritius","毛里求斯","af"],
    ["Morocco","摩洛哥","af"],
    ["Mozambique","莫桑比克","af"],
    ["Namibia","纳米比亚","af"],
    ["Niger","尼日尔","af"],
    ["Nigeria","尼日利亚","af"],
    ["Guinea-Bissau","几内亚比绍","af"],
    ["Réunion","留尼汪","af"],
    ["Rwanda","卢旺达","af"],
    ["Saint Helena","圣赫勒拿","af"],
    ["Sao Tome and Principe","圣多美和普林西比","af"],
    ["Senegal","塞内加尔","af"],
    ["Seychelles","塞舌尔","af"],
    ["Sierra Leone","塞拉利昂","af"],
    ["Somalia","索马里","af"],
    ["South Africa","南非","af"],
    ["Zimbabwe","津巴布韦","af"],
    ["South Sudan","南苏丹","af"],
    ["Sudan","苏丹","af"],
    ["Western Sahara","西撒哈拉","af"],
    ["Eswatini","斯威士兰","af"],
    ["Togo","多哥","af"],
    ["Tunisia","突尼斯","af"],
    ["Uganda","乌干达","af"],
    ["Egypt","埃及","af"],
    ["United Republic of Tanzania","坦桑尼亚联合共和国","af"],
    ["Burkina Faso","布基纳法索","af"],
    ["Zambia","赞比亚","af"],
    ["Albania","阿尔巴尼亚","eu"],
    ["Andorra","安道尔","eu"],
    ["Austria","奥地利","eu"],
    ["Belgium","比利时","eu"],
    ["Bosnia and Herzegovina","波斯尼亚和黑塞哥维那","eu"],
    ["Bulgaria","保加利亚","eu"],
    ["Belarus","白俄罗斯","eu"],
    ["Croatia","克罗地亚","eu"],
    ["Czechia","捷克","eu"],
    ["Denmark","丹麦","eu"],
    ["Estonia","爱沙尼亚","eu"],
    ["Faroe Islands","法罗群岛","eu"],
    ["Finland","芬兰","eu"],
    ["France","法国","eu"],
    ["Germany","德国","eu"],
    ["Gibraltar","直布罗陀","eu"],
    ["Greece","希腊","eu"],
    ["Hungary","匈牙利","eu"],
    ["Iceland","冰岛","eu"],
    ["Ireland","爱尔兰","eu"],
    ["Italy","意大利","eu"],
    ["Kosovo (under UNSC res. 1244)","科索沃（根据联合国安理会第1244号决议）","eu"],
    ["Latvia","拉脱维亚","eu"],
    ["Liechtenstein","列支敦士登","eu"],
    ["Lithuania","立陶宛","eu"],
    ["Luxembourg","卢森堡","eu"],
    ["Malta","马耳他","eu"],
    ["Monaco","摩纳哥","eu"],
    ["Republic of Moldova","摩尔多瓦共和国","eu"],
    ["Montenegro","黑山","eu"],
    ["Netherlands","荷兰","eu"],
    ["Norway","挪威","eu"],
    ["Poland","波兰","eu"],
    ["Portugal","葡萄牙","eu"],
    ["Romania","罗马尼亚","eu"],
    ["Russian Federation","俄罗斯联邦","eu"],
    ["San Marino","圣马力诺","eu"],
    ["Serbia","塞尔维亚","eu"],
    ["Slovakia","斯洛伐克","eu"],
    ["Slovenia","斯洛文尼亚","eu"],
    ["Spain","西班牙","eu"],
    ["Sweden","瑞典","eu"],
    ["Switzerland","瑞士","eu"],
    ["Ukraine","乌克兰","eu"],
    ["North Macedonia","北马其顿","eu"],
    ["United Kingdom","英国","eu"],
    ["Guernsey","根西岛","eu"],
    ["Jersey","泽西岛","eu"],
    ["Isle of Man","马恩岛","eu"],
    ["Antigua and Barbuda","安提瓜和巴布达","la"],
    ["Argentina","阿根廷","la"],
    ["Bahamas","巴哈马","la"],
    ["Barbados","巴巴多斯","la"],
    ["Bolivia (Plurinational State of)","多民族玻利维亚国","la"],
    ["Brazil","巴西","la"],
    ["Belize","伯利兹","la"],
    ["British Virgin Islands","英属维尔京群岛","la"],
    ["Cayman Islands","开曼群岛","la"],
    ["Chile","智利","la"],
    ["Colombia","哥伦比亚","la"],
    ["Costa Rica","哥斯达黎加","la"],
    ["Cuba","古巴","la"],
    ["Dominica","多米尼加","la"],
    ["Dominican Republic","多米尼加共和国","la"],
    ["Ecuador","厄瓜多尔","la"],
    ["El Salvador","萨尔瓦多","la"],
    ["Falkland Islands (Malvinas)","马尔维纳斯群岛（福克兰）","la"],
    ["French Guiana","法属圭亚那","la"],
    ["Grenada","格林纳达","la"],
    ["Guadeloupe","瓜德罗普","la"],
    ["Guatemala","危地马拉","la"],
    ["Guyana","圭亚那","la"],
    ["Haiti","海地","la"],
    ["Honduras","洪都拉斯","la"],
    ["Jamaica","牙买加","la"],
    ["Martinique","马提尼克","la"],
    ["Mexico","墨西哥","la"],
    ["Montserrat","蒙特塞拉特","la"],
    ["Curaçao","库拉索","la"],
    ["Aruba","阿鲁巴","la"],
    ["Sint Maarten (Dutch part)","荷属圣马丁","la"],
    ["Bonaire, Sint Eustatius and Saba","博内尔","la"],
    ["Nicaragua","尼加拉瓜","la"],
    ["Panama","巴拿马","la"],
    ["Paraguay","巴拉圭","la"],
    ["Peru","秘鲁","la"],
    ["Puerto Rico","波多黎各","la"],
    ["Saint Barthélemy","圣巴泰勒米","la"],
    ["Saint Kitts and Nevis","圣基茨和尼维斯","la"],
    ["Anguilla","安圭拉","la"],
    ["Saint Lucia","圣卢西亚","la"],
    ["Saint Martin (French part)","法属圣马丁","la"],
    ["Saint Vincent and the Grenadines","圣文森特和格林纳丁斯","la"],
    ["Suriname","苏里南","la"],
    ["Trinidad and Tobago","特立尼达和多巴哥","la"],
    ["Turks and Caicos Islands","特克斯和凯科斯群岛","la"],
    ["United States Virgin Islands","美属维尔京群岛","la"],
    ["Uruguay","乌拉圭","la"],
    ["Venezuela (Bolivarian Republic of)","委内瑞拉玻利瓦尔共和国","la"],
    ["Bermuda","百慕大","na"],
    ["Canada","加拿大","na"],
    ["Greenland","格陵兰","na"],
    ["Saint Pierre and Miquelon","圣皮埃尔和密克隆","na"],
    ["United States of America","美国","na"],
    ["American Samoa","美属萨摩亚","oc"],
    ["Australia","澳大利亚","oc"],
    ["Solomon Islands","所罗门群岛","oc"],
    ["Cook Islands","库克群岛","oc"],
    ["Fiji","斐济","oc"],
    ["French Polynesia","法属波利尼西亚","oc"],
    ["Kiribati","基里巴斯","oc"],
    ["Guam","关岛","oc"],
    ["Nauru","瑙鲁","oc"],
    ["New Caledonia","新喀里多尼亚","oc"],
    ["Vanuatu","瓦努阿图","oc"],
    ["New Zealand","新西兰","oc"],
    ["Niue","纽埃","oc"],
    ["Northern Mariana Islands","北马里亚纳群岛","oc"],
    ["Micronesia (Fed. States of)","密克罗尼西亚联邦","oc"],
    ["Marshall Islands","马绍尔群岛","oc"],
    ["Palau","帕劳","oc"],
    ["Papua New Guinea","巴布亚新几内亚","oc"],
    ["Tokelau","托克劳","oc"],
    ["Tonga","汤加","oc"],
    ["Tuvalu","图瓦卢","oc"],
    ["Wallis and Futuna Islands","瓦利斯和富图纳群岛","oc"],
    ["Samoa","萨摩亚","oc"],
    ]
    
const rate_data = [
    1.086914898660483,
    0.0897269564442111,
    0.0123950322700539,
    2.2249209526254035,
    0.0235627746349739,
    0.0071745818847452,
    0.0044399893291313,
    0.6777216989368199,
    0.2332118917063814,
    0.2219153136900123,
    7.938684536762329,
    0.1389957947596538,
    0.0091957377115252,
    0.0355660869474427,
    0.109158798370582,
    0.0308378930107344,
    17.17069209067212,
    3.302156048987991,
    0.8524436943147924,
    0.9056453712158008,
    0.1300629413542646,
    0.6060123711120324,
    0.2943768034105433,
    0.1811302657867574,
    0.252109028443501,
    0.2143646508573952,
    0.029714863170357,
    0.1135198479363976,
    0.1195378878170937,
    0.0566474720412114,
    0.0052144926673226,
    0.3777684714912992,
    0.0051199138942934,
    0.0501513252921318,
    0.0591891834770258,
    0.4567469599738611,
    4.821558824697738,
    1.862101884990693,
    0.0246470793084418,
    0.0178225133553791,
    0.4518124800518845,
    0.0316950596859826,
    1.056668309159868,
    0.3654918488662187,
    0.1910856125415087,
    0.4646960451967976,
    0.0683856659032993,
    0.9041231742703556,
    0.0972992160045276,
    0.5623378299855253,
    0.7534040799435793,
    0.6668309904582529,
    1.0290036456914728,
    0.0448243806978218,
    0.3299525716497134,
    0.7206872716229826,
    0.0073034175361943,
    0.1813097420410882,
    0.5803904601981171,
    0.0180153944751787,
    0.0080354721337348,
    0.1356996872838512,
    3.1556200174021964,
    0.3630171617577478,
    0.0374718119882422,
    2.9526495021931924,
    0.0791356232944449,
    0.0183520055413926,
    0.0474830123491131,
    0.0666653748348166,
    0.6776256307342943,
    0.3525405146792139,
    0.7148978591700026,
    1.1195743639454636,
    0.044202543883024,
    0.124351723949852,
    0.0866929885597963,
    0.6837613355452156,
    0.5056330149086977,
    0.7093430318627247,
    0.1182175085684272,
    0.0098168298115748,
    0.474740013006592,
    0.8995096664048796,
    0.0515454313008762,
    0.9062634844568574,
    6.03899317485317,
    0.0482403872480944,
    0.0103560032893156,
    0.3052116582829907,
    2.904387518217398e-05,
    0.0048011759820378,
    0.4188886410312714,
    0.0011811175907417,
    0.1986705322525457,
    0.5768761513010741,
    0.8495221783573651,
    0.3677699312811487,
    0.239351320091044,
    1.1666232075963403,
    0.0069422308832878,
    0.0211171314016852,
    0.209979025704887,
    0.1402238293795359,
    1.287636375329739,
    1.8240640897937723,
    1.7758490228471189,
    0.5965440678026436,
    0.5174330200948912,
    0.0212526694858687,
    0.0004237426917604,
    0.0626543412006836,
    0.0869998110360797,
    0.0195703588695474,
    0.041327944954737,
    0.0641601544216671,
    0.0249754985124248,
    0.0742748701325462,
    0.0484086927812014,
    0.0097572526317139,
    0.0005860905068813,
    0.0351080873772622,
    0.4999739275366633,
    0.5623557031394835,
    0.0002532030144086,
    0.056657898047687,
    0.0780178064573054,
    0.0033906862488317,
    0.0422461782393427,
    0.3025351534777411,
    0.0138137138654909,
    0.0119124571131808,
    0.0002680973093739,
    0.0190684211292196,
    0.005007461967306,
    0.0036215478207926,
    0.0002405428636882,
    0.0369877474018727,
    0.0050439529899708,
    0.135862035098972,
    0.0405601440492801,
    0.3155661721428099,
    0.0591787574705501,
    0.159541729949423,
    1.024436310140389,
    0.0001481982349039,
    0.0485516780128675,
    0.0465081807436396,
    0.0137921171377913,
    0.2620710776309867,
    0.0846628961560371,
    0.064119939825261,
    0.137366358890459,
    0.0147222658583691,
    0.5046991426143785,
    0.0004661914324113,
    0.0008690821112204,
    0.0005361946187478,
    0.0008311016590591,
    0.4653417128835398,
    0.0034785625891265,
    0.0022423361070134,
    0.1965570317969813,
    2.0105697066334765,
    0.0053887559184156,
    0.0001787315395826,
    0.0004870434453626,
    0.1685095849479804,
    0.5320405998820282,
    0.0447908685341501,
    0.0736798430486858,
    0.0007179050173234,
    0.1494158435173199,
    0.2223152255098283,
    0.074225718959161,
    3.0533304678695726e-05,
    0.0057015361126852,
    0.0014320864609056,
    0.0034174959797691,
    0.2780995731578055,
    0.011872987231523,
    0.1993214129425257,
    0.1617259783060721,
    0.02401407177242,
    0.0026251194876195,
    1.3832383864229802,
    2.978858993043485e-05,
    0.0016346488724326,
    0.0005697067824195,
    0.0002926728960665,
    0.0002107542737578,
    0.1028249994366233,
    0.0570749383067131,
    0.1022999755390993,
    0.4385520892443515,
    0.0194318419263709,
    6.77690420917393e-05,
    0.0004133166852847,
    0.0001079836384978,
    0.001496131929256,
    0.0003276744892347,
    0.0009733421759769,
    0.00825590769922,
    0.0126705767269104,
    0.0004118272557882,
    0.000808015501863,
    0.0265438677722622,
    0.3387692495543739,
    0.0003492712169343,
    0.2827048891610507,
    0.0005816222183917,
    3.2022734175217466e-05,
    2.7892255742610854,
    0.000551088913713,
    0.2246908655567805,
    0.0159354061832861,
    0.0002025624115269,
    0.0131635778902591,
    0.0028425761941117,
    0.0026027780451717,
    0.0021023297343404,
    0.0002479900111708,
    0.003037691458156,
    0.0070978762656743,
    0.0477496202289905,
    2.010729820304353e-05,
    0.0004542759964391,
    0.00178135767784,
    0.0005674726381747,
    0.0001980941230373,
    0.1890406258427843,
    2.6065016189130496e-05,
    0.0018238064184908,
    0.000194370549296,
    9.830234677043503e-05,
    0.0044854169287752
    ]
    
const region_map = {
    'as':'亚洲',
    'af':'非洲',
    'la':'拉丁美洲',
    'na':'北美洲',
    'oc':'大洋洲',
    'eu':'欧洲'
}

function rnd(){
    let start = 0.0;
    let random_num = Math.random();
    let index = 0;
    let exp = 0.0;
    for(var i = 0;i<rate_data.length;i++){
        index = i;
        start+=rate_data[i] /100.0;
        exp = rate_data[i]
        if(random_num<=start){
            break;
        }
    }
    
    let msg = '你出生在:'+data[index][1]+'('+region_map[data[index][2]]+')'+'('+data[index][0]+'),期望概率:'+exp;
    return msg;
}

function do_reborn(){
    var row = rnd();
    
    document.getElementById('output_label').innerHTML = row;
}