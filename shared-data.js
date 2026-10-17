/* Sài Gòn Study — shared data (Tranche 1)
   Vocab rows: "southern form | english | category | northern form (if different) | note"
   All forms are Southern (Hồ Chí Minh City) by default. */

const VI_CATEGORIES = {
  g: 'Greetings & politeness',
  p: 'People & pronouns',
  n: 'Numbers',
  t: 'Time',
  f: 'Food & drink',
  d: 'Getting around',
  a: 'Flying & travel',
  b: 'Body & health',
  v: 'Verbs',
  j: 'Describing words',
  q: 'Questions & particles',
  s: 'Shopping & money',
  h: 'Home & daily life',
  e: 'People & feelings',
  c: 'Around Saigon',
  w: 'Work & jobs',
  l: 'Free time',
  x: 'Nature & animals',
  z: 'Southern slang',
  k: 'Everyday phrases',
  o: 'Colours',
  r: 'Romance & intimacy (18+)'
};
const VI_PRIVATE_CATS = ['r'];

const VI_VOCAB_RAW = `
xin chào|hello (polite)|g||
chào anh|hi (to an older man)|g||Swap anh for chị, em, cô, chú… to match the listener
chào chị|hi (to an older woman)|g||
cám ơn|thank you|g|cảm ơn|Southerners usually write and say cám ơn
không có chi|you're welcome|g|không có gì|
xin lỗi|sorry / excuse me|g||
dạ|yes (polite); also a polite "pardon?"|g|vâng|Start replies to elders with dạ
dạ không|no (polite)|g||
ừ|yeah (casual)|g||Only with friends or people younger than you
hông|no / not (casual)|g|không|Spoken Southern form of không
được|OK / can / possible|g||
không sao|no problem / it's fine|g||
hẹn gặp lại|see you again|g||
tạm biệt|goodbye|g||
chúc ngủ ngon|good night|g||
rất vui được gặp anh|nice to meet you|g||
anh khỏe không?|how are you? (to an older man)|g||
khỏe|well / healthy|g||
làm ơn|please (do me a favour)|g||
mời|please (go ahead) / to invite|g||Mời anh ngồi = please sit down
chúc mừng|congratulations|g||
xin phép|excuse me (asking permission)|g||
dô|cheers!|g|vô|Một, hai, ba, dô! Southern spelling of vô
tui|I / me (casual)|p|tôi|Southern everyday "I"
tôi|I / me (neutral)|p||
mình|I / we (friendly)|p||
anh|older brother; "you" to an older man|p||
chị|older sister; "you" to an older woman|p||
em|younger sibling; "you" to someone younger|p||
cô|aunt; "you" to a woman your parents' age|p||
chú|uncle; "you" to a man a bit younger than your father|p||
bác|uncle/aunt older than your parents|p||
ông|grandfather; Mr; "you" to an elderly man|p||
bà|grandmother; Mrs; "you" to an elderly woman|p||
con|child; "I" when talking to parents|p||
cháu|grandchild, niece, nephew; "I" to elders|p||
ba|father|p|bố|
má|mother|p|mẹ|
vợ|wife|p||
chồng|husband|p||
bạn|friend; "you" to a peer|p||
người|person|p||
tụi mình|we (casual, includes listener)|p|chúng mình|
tụi nó|they (casual)|p|chúng nó|
ổng|he (that man)|p|ông ấy|Southern contraction: ông + ấy
bả|she (that woman)|p|bà ấy|Southern contraction: bà + ấy
ảnh|he (that young man)|p|anh ấy|Southern contraction: anh + ấy
chỉ|she (that young woman)|p|chị ấy|Also means "only"; context tells
ai|who|p||
gia đình|family|p||
con trai|son / boy|p||
con gái|daughter / girl|p||
một|one|n||
hai|two|n||
ba|three|n||Same word as "father" in the South
bốn|four|n||
năm|five|n||Same word as "year"
sáu|six|n||
bảy|seven|n||
tám|eight|n||
chín|nine|n||
mười|ten|n||
mười lăm|fifteen|n||Năm becomes lăm after mười
hai mươi|twenty|n||
hai mươi mốt|twenty-one|n||Một becomes mốt after 20+
hai mươi tư|twenty-four|n||Bốn often becomes tư after 20+
chục|ten (a group of ten)|n||Hai chục = twenty, common at markets
trăm|hundred|n||
lẻ|"and" in 101–109|n|linh|Một trăm lẻ năm = 105
ngàn|thousand|n|nghìn|
triệu|million|n||
rưỡi|and a half|n||Hai giờ rưỡi = 2:30
nửa|half|n||
hôm nay|today|t||
hôm qua|yesterday|t||
ngày mai|tomorrow|t||
bữa nay|today (casual)|t|hôm nay|
bữa hổm|the other day|t|hôm nọ|
bây giờ|now|t||
giờ|hour / o'clock|t||
phút|minute|t||
sáng|morning|t||
trưa|noon / midday|t||
chiều|afternoon|t||
tối|evening|t||
đêm|night|t||
tuần|week|t||
tháng|month|t||
năm|year|t||
thứ hai|Monday|t||Thứ ba = Tuesday… thứ bảy = Saturday
chủ nhật|Sunday|t||
cuối tuần|weekend|t||
mấy giờ|what time|t||
lúc nào|when|t||
hồi nãy|a moment ago|t|lúc nãy|
sớm|early|t||
trễ|late|t|muộn|
liền|right away|t|ngay|
lâu|a long time|t||
thường|usually|t||
luôn|always|t||
chưa|not yet|t||
ăn|eat|f||
uống|drink|f||
cơm|cooked rice; a meal|f||
phở|phở noodle soup|f||
bánh mì|bread; bánh mì sandwich|f||
hủ tiếu|hủ tiếu (Southern noodle soup)|f||
bún|rice vermicelli|f||
cơm tấm|broken rice (Saigon classic)|f||
gỏi cuốn|fresh spring roll|f||
chả giò|fried spring roll|f|nem rán|
cà phê sữa đá|iced coffee with condensed milk|f||
cà phê đen|black coffee|f||
trà đá|iced tea|f||
nước|water|f||
nước đá|ice|f|đá|
bia|beer|f||
sinh tố|smoothie|f||
trái cây|fruit|f|hoa quả|
trái|fruit (classifier)|f|quả|Trái xoài = a mango
thịt heo|pork|f|thịt lợn|
thịt bò|beef|f||
gà|chicken|f||
cá|fish|f||
tôm|shrimp|f||
rau|vegetables|f||
hột gà|chicken egg|f|trứng gà|
đậu phộng|peanut|f|lạc|
bắp|corn|f|ngô|
thơm|pineapple|f|dứa|Also means "fragrant"
chén|bowl|f|bát|
muỗng|spoon|f|thìa|
đũa|chopsticks|f||
ly|glass (drinking)|f|cốc|
ngon|delicious|f||
cay|spicy|f||
ngọt|sweet|f||
mặn|salty|f||
chua|sour|f||
đói|hungry|f||
no|full (after eating)|f||
tính tiền|the bill, please|f||
ít đường|less sugar|f||
không đá|no ice|f||
mang về|takeaway|f||
ăn chay|eat vegetarian|f||
quán|eatery / small shop|f||
nhậu|drink and snack with friends|f||
ở đâu|where (is it)|d||
đây|here|d||
đó|there|d||
kia|over there|d||
quẹo trái|turn left|d|rẽ trái|
quẹo phải|turn right|d|rẽ phải|
đi thẳng|go straight|d||
dừng lại|stop|d||Dừng ở đây = stop here
gần|near|d||
xa|far|d||
đường|road / street|d||
ngã tư|intersection|d||
chợ|market|d||
nhà|house / home|d||
khách sạn|hotel|d||
nhà vệ sinh|toilet|d||
tiệm|shop|d|cửa hàng|
nhà thuốc|pharmacy|d||
bệnh viện|hospital|d||
ngân hàng|bank|d||
quận|district|d||Quận 1 = District 1
xe ôm|motorbike taxi|d||
xe máy|motorbike|d||
đi bộ|walk|d||
kẹt xe|traffic jam|d|tắc đường|
chỗ|place / spot|d||
phía trước|ahead / in front|d||
trong|inside|d||
ngoài|outside|d||
trên|on / above|d||
dưới|under / below|d||
sân bay|airport|a||
máy bay|airplane|a||
phi công|pilot|a||
cơ trưởng|captain|a||Sino-Vietnamese 機長
tiếp viên|flight attendant|a||
chuyến bay|flight|a||
vé|ticket|a||
hộ chiếu|passport|a||
hành lý|luggage|a||
cất cánh|take off|a||
hạ cánh|land|a||
bị trễ|delayed|a|bị muộn|
cửa lên máy bay|boarding gate|a||
thời tiết|weather|a||
mưa|rain|a||
nắng|sunny; sunshine|a||
nóng|hot|a||
lạnh|cold|a||
gió|wind|a||
bão|storm|a||
du lịch|travel / tourism|a||
đổi tiền|change money|a||
đầu|head|b||
cổ|neck|b||
vai|shoulder|b||
lưng|back|b||
tay|hand / arm|b||
chân|leg / foot|b||
bụng|stomach|b||
cơ|muscle|b||Sino-Vietnamese 肌
đau|painful / hurt|b||
mỏi|sore / stiff (muscles)|b||Mỏi vai = stiff shoulders
mệt|tired|b||
bệnh|sick|b|ốm|
thuốc|medicine|b||
mát-xa|massage|b||From French massage
mạnh|strong / firm|b||Mạnh hơn = firmer
nhẹ|light / gentle|b||Nhẹ thôi = gently, please
đau ở đâu?|where does it hurt?|b||
thở|breathe|b||
nằm xuống|lie down|b||
khỏe|strong / healthy|b||
đi|go|v||
tới|arrive / come to|v|đến|Both are used; tới is more common in the South
về|return / go home|v||
làm|do / work|v||
nói|speak / say|v||
hiểu|understand|v||
biết|know|v||
muốn|want|v||
thích|like|v||
cần|need|v||
có|have / there is|v||
là|to be (is)|v||
mua|buy|v||
bán|sell|v||
trả|pay / give back|v||
chờ|wait|v|đợi|
ngủ|sleep|v||
học|study|v||
đọc|read|v||
viết|write|v||
nghe|listen / hear|v||
coi|watch / look at|v|xem|
mở|open|v||
đóng|close|v||
gọi|call|v||
gặp|meet|v||
giúp|help|v||
ngồi|sit|v||
đứng|stand|v||
chơi|play / hang out|v||
nấu|cook|v||
lấy|take / get|v||
cho|give; let|v||
thấy|see / feel|v||
nhớ|remember / miss|v||
quên|forget|v||
xài|use / spend|v|dùng|
kêu|call (out); order food|v|gọi|Kêu món = order a dish
mướn|rent / hire|v|thuê|
lái|drive|v||
dạy|teach|v||
lớn|big|j|to|
nhỏ|small|j|bé|
đẹp|beautiful|j||
xấu|ugly / bad|j||
tốt|good|j||
mắc|expensive|j|đắt|
rẻ|cheap|j||
nhiều|many / much|j||
ít|few / little|j||
mới|new|j||
cũ|old (things)|j||
già|old (people)|j||
trẻ|young|j||
vui|happy / fun|j||
buồn|sad|j||
dễ|easy|j||
khó|difficult|j||
lẹ|quick|j|nhanh|Lẹ lên! = hurry up!
chậm|slow|j||
đúng|correct|j||
sai|wrong|j||
sạch|clean|j||
dơ|dirty|j|bẩn|
đông|crowded|j||
vắng|quiet / empty|j||
dễ thương|cute / lovely|j||
thiệt|real / really|j|thật|
quá|very / too|j||Ngon quá! = so good!
lắm|very (after the word)|j||Ngon lắm = very tasty
rất|very (before the word)|j||
hơi|a bit|j||
bận|busy|j||
rảnh|free (time)|j||
đủ|enough|j||
gì|what|q||
sao|why / how come|q||
tại sao|why|q||
làm sao|how|q|thế nào|
bao nhiêu|how much / how many|q||
mấy|how many (small number)|q||
đâu|where|q||
nào|which|q||
có… không?|yes/no question frame|q||Anh có đói không? = Are you hungry?
rồi|already|q||
đã|(past marker)|q||
đang|(in progress)|q||
sẽ|(future marker)|q||
và|and|q||
nhưng|but|q||
hay|or (in questions)|q||
nếu|if|q||
vì|because|q||
cũng|also|q||
nữa|more / again|q||
với|with|q||
của|of / belonging to|q||
này|this|q||
vậy|like that / so|q|thế|
nè|here! / look (Southern particle)|q|này|
nha|softener: OK? / alright|q|nhé|
hả|huh? (question particle)|q||
cái|classifier for objects|q||
con|classifier for animals|q||
chiếc|classifier for vehicles, single items|q||
tiền|money|s||
giá|price|s||
bao nhiêu tiền?|how much is it?|s||
bớt|discount / reduce|s||Bớt chút đi! = a bit cheaper, please
mắc quá|too expensive|s|đắt quá|
cái này|this one|s||
cỡ|size|s||
áo|shirt / top|s||
quần|trousers|s||
giày|shoes|s||
thẻ|card|s||
tiền mặt|cash|s||
đồng|đồng (currency)|s||
thối tiền|give change|s|trả lại tiền|
chuyển khoản|bank transfer|s||
lấy cái này|I'll take this|s||
coi thử|have a look / try|s|xem thử|
`;

/* Tranche 4 additions, appended so existing flashcard ids (w0…) keep their progress */
const VI_VOCAB_RAW_T4 = `
bò kho|Saigon-style beef stew|f||
bánh xèo|crispy rice pancake|f||
bún bò Huế|spicy Huế beef noodle soup|f||
bún thịt nướng|vermicelli with grilled pork|f||
bánh canh|thick noodle soup|f||
cháo|rice porridge|f||
xôi|sticky rice|f||
cơm chiên|fried rice|f||
mì|egg noodles; instant noodles|f||
lẩu|hotpot|f||
ốc|sea snails|f||A Saigon night-time favourite
chè|sweet dessert soup|f||
bánh flan|crème caramel|f||From French flan
sữa chua|yogurt|f||
nước mía|sugarcane juice|f||
nước dừa|coconut water|f||
trà sữa|milk tea|f||
bạc xỉu|milky coffee (more milk than coffee)|f||A Saigon speciality
nước mắm|fish sauce|f||
tương ớt|chilli sauce|f||
ớt|chilli|f||
tỏi|garlic|f||
hành|onion; spring onion|f||
chanh|lime|f||
đường|sugar|f||Same spelling as "road"
muối|salt|f||
tiêu|pepper|f||
dầu ăn|cooking oil|f||
rau thơm|fresh herbs|f||
giá|bean sprouts|f||Same spelling as "price"
cua|crab|f||
mực|squid|f||
vịt|duck (meat)|f||
sườn|pork ribs; pork chop|f||
heo quay|roast pork|f|lợn quay|
lạp xưởng|Chinese sausage|f||
đậu hũ|tofu|f|đậu phụ|
nấm|mushroom|f||
khoai tây|potato|f||
cà chua|tomato|f||
dưa leo|cucumber|f|dưa chuột|
xoài|mango|f||
dừa|coconut|f||
chuối|banana|f||
sầu riêng|durian|f||
mít|jackfruit|f||
thanh long|dragon fruit|f||
chôm chôm|rambutan|f||
măng cụt|mangosteen|f||
dưa hấu|watermelon|f||
nướng|grilled|f||
chiên|fried|f|rán|
luộc|boiled|f||
hấp|steamed|f||
xào|stir-fried|f||
sống|raw|f||Also means "to live"
chín|cooked; ripe|f||Same word as "nine"
đắng|bitter|f||
lạt|bland (not salty enough)|f|nhạt|
thực đơn|menu|f||Many places just say "menu"
món|dish|f||
khăn giấy|tissue; napkin|f||
ống hút|straw|f||
nĩa|fork|f|dĩa|In the South, dĩa means plate
dĩa|plate|f|đĩa|
tô|large bowl|f|bát tô|
nồi|pot|f||
chảo|frying pan|f||
ăn sáng|have breakfast|f||
ăn trưa|have lunch|f||
ăn tối|have dinner|f||
ăn vặt|snack|f||
khát|thirsty|f||
no rồi|I'm full|f||
ăn thử|have a taste|f||
phòng ngủ|bedroom|h||
phòng tắm|bathroom|h||
nhà bếp|kitchen|h||
phòng khách|living room|h||
cửa|door|h||
cửa sổ|window|h||
giường|bed|h||
gối|pillow|h||
mền|blanket|h|chăn|
tủ lạnh|fridge|h||
máy lạnh|air conditioner|h|điều hòa|
quạt|fan|h||
đèn|light; lamp|h||
chìa khóa|key|h||
bàn chải đánh răng|toothbrush|h||
kem đánh răng|toothpaste|h||
xà bông|soap|h|xà phòng|
khăn tắm|bath towel|h||
dầu gội|shampoo|h||
máy giặt|washing machine|h||
quần áo|clothes|h||
giặt đồ|do the laundry|h|giặt quần áo|
nấu cơm|cook a meal|h||
rửa chén|wash the dishes|h|rửa bát|
dọn dẹp|tidy up|h||
tắm|shower; bathe|h||
đánh răng|brush your teeth|h||
thức dậy|wake up|h||
đi ngủ|go to bed|h||
mặc đồ|get dressed|h|mặc quần áo|
nghỉ ngơi|rest|h||
điện|electricity|h||
nước nóng|hot water|h||
mật khẩu|password|h||Mật khẩu wifi là gì? = what's the wifi password?
sạc|charge (a phone)|h||
cục sạc|charger|h||
pin|battery|h||
hàng xóm|neighbour|h||
chủ nhà|landlord|h||
tiền nhà|rent|h||
căn hộ|apartment|h||
chung cư|apartment building|h||
hẻm|alley|h|ngõ|Saigon's small lanes. Nhà tui ở trong hẻm = I live down an alley
lầu|floor; storey|h|tầng|Lầu 1 is the first floor above ground level
thang máy|lift|h||
cầu thang|stairs|h||
vui vẻ|cheerful|e||
hạnh phúc|happy (deeply)|e||
buồn ngủ|sleepy|e||
giận|angry|e||
lo|worried|e||
sợ|afraid|e||
ngại|reluctant; shy|e||
mắc cỡ|embarrassed; shy|e|xấu hổ|
nhớ nhà|homesick|e||
chán|bored; fed up|e||
ngạc nhiên|surprised|e||
yêu|love|e||
thương|love (warm, caring)|e||Southerners often say thương where Hanoi says yêu
ghét|hate|e||
cô đơn|lonely|e||
tự tin|confident|e||
căng thẳng|stressed|e||
thoải mái|comfortable; relaxed|e||
hiền|gentle; kind|e||
tốt bụng|kind-hearted|e||
dễ chịu|pleasant|e||
khó chịu|unpleasant; annoyed|e||
vui tính|good-humoured|e||
thông minh|smart|e||
giỏi|good at; skilful|e||
siêng|hard-working|e|chăm chỉ|
làm biếng|lazy|e|lười|
đẹp trai|handsome|e||
xinh|pretty|e||
mập|fat|e|béo|
ốm|thin|e|gầy|In the South ốm means skinny; sick is bệnh
cao|tall|e||
thấp|short (height)|e||
bạn trai|boyfriend|e||
bạn gái|girlfriend|e||
người yêu|sweetheart|e||
đồng nghiệp|colleague|e||
khách|guest; customer|e||
người lạ|stranger|e||
người nước ngoài|foreigner|e||
ông bà|grandparents|e||
cha mẹ|parents|e|bố mẹ|Ba má in casual Southern speech
anh trai|older brother|e||
chị gái|older sister|e||
em trai|younger brother|e||
em gái|younger sister|e||
con cái|children (your kids)|e||
cưới|get married|e||
độc thân|single|e||
sinh nhật|birthday|e||
Sài Gòn|Saigon|c||The everyday name for Hồ Chí Minh City
thành phố|city|c||
trung tâm|city centre|c||
chợ Bến Thành|Bến Thành market|c||
nhà thờ Đức Bà|Notre-Dame Cathedral|c||
bưu điện|post office|c||
phố đi bộ|walking street|c||
bờ sông|riverside|c||
công viên|park|c||
quán nhậu|beer-and-snack spot|c||
xe đẩy|street cart|c||
vỉa hè|pavement|c||Where much of Saigon eats and drinks
đèn đỏ|red light|c||
đèn xanh|green light|c||
cầu|bridge|c||
xe buýt|bus|c||
trạm xe buýt|bus stop|c||
tàu điện|metro train|c||
ga|station|c||
bến xe|bus terminal|c||
siêu thị|supermarket|c||
cửa hàng tiện lợi|convenience store|c||
trung tâm thương mại|shopping mall|c||
nhà hàng|restaurant|c||
tiệm cắt tóc|barber shop|c||
tiệm thuốc tây|pharmacy|c|hiệu thuốc|
phòng khám|clinic|c||
cây xăng|petrol station|c||
bãi giữ xe|parking area|c|bãi gửi xe|
gửi xe|park (a vehicle)|c||
nón bảo hiểm|helmet|c|mũ bảo hiểm|
ồn|noisy|c||
yên tĩnh|quiet; peaceful|c||
an toàn|safe|c||
nguy hiểm|dangerous|c||
cẩn thận|careful|c||Cẩn thận nha! = be careful!
qua đường|cross the street|c||
góc|corner|c||
đối diện|opposite|c||
bên cạnh|next to|c||
đầu hẻm|entrance of the alley|c|đầu ngõ|
cuối đường|end of the street|c||
địa chỉ|address|c||
bản đồ|map|c||
đường băng|runway|a||
buồng lái|cockpit|a||
cơ phó|first officer|a||
phi hành đoàn|flight crew|a||
hành khách|passenger|a||
ghế ngồi|seat|a||
dây an toàn|seat belt|a||Thắt dây an toàn = fasten your seat belt
lối thoát hiểm|emergency exit|a||
áo phao|life jacket|a||
lối đi|aisle|a||
nhiễu động|turbulence|a||
độ cao|altitude|a||
tốc độ|speed|a||
nhiên liệu|fuel|a||
đài kiểm soát|control tower|a||
quốc nội|domestic|a||
quốc tế|international|a||
nhà ga|terminal|a||
làm thủ tục|check in (at the airport)|a||
thẻ lên máy bay|boarding pass|a||
hành lý xách tay|cabin baggage|a||
hành lý ký gửi|checked baggage|a||
hải quan|customs|a||
xuất cảnh|exit (a country)|a||
nhập cảnh|enter (a country)|a||
thị thực|visa|a||People also just say visa
chuyến bay thẳng|direct flight|a||
quá cảnh|transit|a||
hủy|cancel; cancelled|a||
khởi hành|depart|a||
lịch bay|flight schedule|a||
giờ địa phương|local time|a||
lệch múi giờ|jet lag|a||
đặt phòng|book a room|a||
nhận phòng|check in (hotel)|a||
trả phòng|check out|a||
đặt vé|book a ticket|a||
chụp hình|take photos|a|chụp ảnh|
biển|sea; beach|a||
núi|mountain|a||
đảo|island|a||
công việc|work; job|w||
đi làm|go to work|w||
văn phòng|office|w||
công ty|company|w||
họp|have a meeting|w||
cuộc họp|meeting|w||
lương|salary|w||
sếp|boss|w||
nhân viên|employee; staff|w||
nghỉ phép|take leave|w||
tăng ca|overtime|w||
gửi|send|w||
hợp đồng|contract|w||
kinh doanh|business|w||
khách hàng|client|w||
lịch hẹn|appointment|w||Đặt lịch hẹn = book an appointment
nghề|profession|w||
bác sĩ|doctor|w||
y tá|nurse|w||
giáo viên|teacher|w||
kỹ sư|engineer|w||
luật sư|lawyer|w||
đầu bếp|chef|w||
tài xế|driver|w||
kỹ thuật viên|technician; massage therapist (at spas)|w||
đầu tư|invest|w||
cổ phiếu|share; stock|w||
thị trường chứng khoán|stock market|w||
lãi suất|interest rate|w||
ngân hàng trung ương|central bank|w||
sở thích|hobby|l||
đi chơi|go out; hang out|l||
đi dạo|go for a stroll|l||
coi phim|watch a film|l|xem phim|
nghe nhạc|listen to music|l||
hát|sing|l||
nhảy|dance; jump|l||
chơi thể thao|play sport|l||
đá banh|play football|l|đá bóng|
bơi|swim|l||
chạy bộ|go running|l||
tập gym|work out|l||
đọc sách|read (books)|l||
chơi game|play video games|l||
câu cá|go fishing|l||
cắm trại|go camping|l||
leo núi|go hiking|l||
đi biển|go to the beach|l||
nấu ăn|cook (as a hobby)|l||
vẽ|draw; paint|l||
uống cà phê|have coffee|l||
đi nhậu|go out drinking|l||
lễ hội|festival|l||
Tết|Lunar New Year|l||
Trung thu|Mid-Autumn Festival|l||
nghỉ lễ|public holiday|l||
quà|gift|l||
tiệc|party|l||
mắt|eye|b||
mũi|nose|b||
miệng|mouth|b||
tai|ear|b||
răng|tooth|b||
tóc|hair|b||
mặt|face|b||
ngực|chest|b||
eo|waist|b||
hông|hip|b||Same word as casual Southern "no"
đùi|thigh|b||
đầu gối|knee|b||
bắp chân|calf|b||
bàn chân|foot|b||
bàn tay|hand|b||
ngón tay|finger|b||
khuỷu tay|elbow|b||
cổ tay|wrist|b||
cổ chân|ankle|b||
xương|bone|b||
gân|tendon|b||
da|skin|b||
tim|heart|b||
cảm|catch a cold|b||
sốt|fever|b||
ho|cough|b||
nhức đầu|headache|b|đau đầu|
đau bụng|stomachache|b||
chóng mặt|dizzy|b||
dị ứng|allergic|b||
bị thương|injured|b||
căng cơ|pulled muscle|b||
chuột rút|cramp|b||
khám bệnh|see a doctor|b||
uống thuốc|take medicine|b||
thư giãn|relax|b||
dầu gió|medicated oil|b||A staple in Vietnamese homes
bấm huyệt|acupressure|b||
cạo gió|coin rubbing (folk remedy)|b||
bắt đầu|start|v||
kết thúc|end; finish|v||
xong|done; finish|v||
tiếp tục|continue|v||
thử|try|v||
hỏi|ask|v||
trả lời|answer|v||
giải thích|explain|v||
dịch|translate|v||
lặp lại|repeat|v||
tìm|look for|v||
mất|lose; take (time)|v||Mất 20 phút = it takes 20 minutes
sửa|fix; repair|v||
đổi|change; exchange|v||
chọn|choose|v||
quyết định|decide|v||
hứa|promise|v||
tin|believe|v||
nghĩ|think|v||
cảm thấy|feel|v||
hy vọng|hope|v||
mong|look forward to|v||
gặp lại|meet again|v||
đón|pick up (someone)|v||
đưa|take (someone); hand over|v||
mang|bring; carry|v||
cầm|hold|v||
để|put; leave|v||
chạy|run|v||
leo|climb|v||
rớt|fall; drop|v|rơi|
té|fall over|v|ngã|
vô|go in; enter|v|vào|Vô đi! = come on in!
ra|go out|v||
lên|go up|v||
xuống|go down|v||
quay lại|come back|v||
nói chuyện|chat; talk|v||
la|scold; shout at|v|mắng|
cười|laugh; smile|v||
khóc|cry|v||
hiểu lầm|misunderstand|v||
xin|ask for (politely)|v||
mượn|borrow|v||
cho mượn|lend|v||
giữ|keep|v||
bỏ|throw away; quit|v||
kiếm|look for; earn|v|tìm|Kiếm tiền = earn money
tính|plan to; calculate|v||Tui tính đi Đà Lạt = I'm planning to go to Đà Lạt
ngắn|short (length)|j||
dài|long|j||
rộng|wide; spacious|j||
hẹp|narrow|j||
nặng|heavy|j||
cứng|hard|j||
mềm|soft|j||
ướt|wet|j||
khô|dry|j||
ấm|warm|j||
mát|cool (pleasant)|j||Trời mát = nice cool weather
yếu|weak|j||
giàu|rich|j||
nghèo|poor|j||
quan trọng|important|j||
đặc biệt|special|j||
bình thường|normal; OK|j||
giống|similar; alike|j||
khác|different|j||
đầy|full|j||
trống|empty|j||
nổi tiếng|famous|j||
tuyệt vời|wonderful|j||
dở|bad (quality, taste)|j||Phim này dở quá = this film is bad
ghê|awful; (South) really|j||Ngon ghê! = so good!
xịn|top quality, legit (slang)|j||
sẵn sàng|ready|j||
rõ|clear|j||
năm nay|this year|t||
năm sau|next year|t||
năm ngoái|last year|t||
tuần sau|next week|t||
tuần trước|last week|t||
tháng sau|next month|t||
sáng nay|this morning|t||
tối nay|tonight|t||
ngày|day|t||
hằng ngày|every day|t||
mỗi tuần|every week|t||
thỉnh thoảng|sometimes|t||
ít khi|rarely|t||
không bao giờ|never|t||
lúc|at (a time)|t||Lúc 3 giờ = at 3 o'clock
khoảng|about; around|t||
trước|before|t||
sau|after|t||
mùa mưa|rainy season|t||In Saigon, roughly May to November
mùa khô|dry season|t||
giờ cao điểm|rush hour|t||
trời|sky; weather|x||
mặt trời|sun|x||
mặt trăng|moon|x||
mây|cloud|x||
sấm|thunder|x||
sét|lightning|x||
ngập|flooded|x||Saigon streets often flood after heavy rain
sông|river|x||
cây|tree; plant|x||
hoa|flower|x||
con chó|dog|x||
con mèo|cat|x||
con vịt|duck|x||
con muỗi|mosquito|x||
con gián|cockroach|x||
con chuột|mouse; rat|x||
con rắn|snake|x||
con khỉ|monkey|x||
con trâu|water buffalo|x||
con cá sấu|crocodile|x||
dữ vậy|wow, that much?|z||
quá trời|loads; so much|z||Đông quá trời = so crowded
hết sẩy|awesome, the best|z||
hổng biết|dunno|z|không biết|
sao vậy?|what's wrong?|z|sao thế?|
gì vậy?|what is it?|z|gì thế?|
thiệt hả?|really?|z|thật à?|
trời ơi|oh my god!|z||Often said chời ơi in the South
thôi kệ|never mind; forget it|z||
được rồi|OK, all right|z||
không sao đâu|it's no big deal|z||
từ từ|slowly; take it easy|z||Từ từ thôi! = easy does it
chút xíu|a tiny bit|z||
chút chút|a little|z||
ghiền|hooked on; love|z|nghiện|Ghiền cà phê = hooked on coffee
xỉn|drunk|z|say|
khùng|crazy|z||
cà chớn|cheeky; unreliable|z||
lộn xộn|messy; chaotic|z||
tào lao|nonsense|z||
chảnh|stuck-up|z||
vậy đó|that's how it is|z|thế đấy|
ừ ha|oh right, true|z||
hen|right? OK? (warm)|z||
chứ sao|of course!|z||
mắc mệt|a hassle; tiresome|z||
mắc cười|funny|z|buồn cười|
mắc ói|nauseating|z|buồn nôn|
`;

/* Tranche 8 additions, appended after T4 so existing ids keep their progress */
const VI_VOCAB_RAW_T8 = `
ở|live; stay|v||Anh ở đâu? = Where do you live?
chết|die|v||
sinh|be born|v||
lớn lên|grow up|v||
làm việc|work|v||
nghỉ|rest; take time off|v||
thức|stay awake|v||
nằm|lie down|v||
bắt|catch|v||
ném|throw|v||
kéo|pull|v||
đẩy|push|v||
bật|turn on|v||South also says mở
tắt|turn off|v||
rửa|wash|v||
lau|wipe|v||
cắt|cut|v||
thắng|win|v||
thua|lose (a game)|v||
chuẩn bị|prepare|v||
đặt|order; book|v||
giao|deliver|v||Giao hàng = delivery
nhận|receive|v||
cho phép|allow|v||
cấm|forbid|v||Cấm hút thuốc = no smoking
đồng ý|agree|v||
từ chối|refuse|v||
khen|praise|v||
chê|criticise|v||
cãi|argue|v||
tha thứ|forgive|v||
chúc|wish (someone well)|v||
hẹn|arrange to meet|v||
quen|know (a person); be used to|v||In the South also "to date"
nhận ra|recognise|v||
cố gắng|try hard|v||
ăn mừng|celebrate|v||
bay|fly|v||
đậu xe|park (a car)|v|đỗ xe|
đổ xăng|fill up with petrol|v||
tải|download|v||
nhắn tin|text; message|v||
gọi điện|make a phone call|v||
chụp|take (a photo)|v||
lạ|strange; unfamiliar|j||
tiện|convenient|j||
thúi|smelly|j|thối|
đúng giờ|on time|j||
tuyệt|great|j||
hay|interesting; good (films, books)|j||Also means "or" in questions
sướng|blissful; feels great|j||
khổ|miserable; hard (life)|j||
lịch sự|polite|j||
thân thiện|friendly|j||
nghiêm túc|serious|j||
bình tĩnh|calm|j||
lo lắng|anxious|e||
tự hào|proud|e||
xấu hổ|ashamed|e||
màu|colour|o||Màu gì? = What colour?
đỏ|red|o||
xanh|blue; green|o||Xanh dương = blue, xanh lá = green
xanh dương|blue|o||
xanh lá|green|o||
vàng|yellow; gold|o||
trắng|white|o||
đen|black|o||
hồng|pink|o||
tím|purple|o||
màu cam|orange (colour)|o||
nâu|brown|o||
xám|grey|o||
máy tính|computer|h||
tin nhắn|message|h||
hình|photo|h|ảnh|
tiền lẻ|small change|s||
bóp|wallet|s|ví|
túi|bag|s||
ba lô|backpack|s||
mắt kính|glasses|s|kính|
đồng hồ|watch; clock|s||
xe hơi|car|d|ô tô|
xe đạp|bicycle|d||
ghe|small boat|d|thuyền|
tàu|ship; train|d||
chùa|pagoda|c||
nhà thờ|church|c||
bãi biển|beach|c||
hồ bơi|swimming pool|c|bể bơi|
trường|school|c||
lớp|class|w||
bài|lesson|w||
chữ|letter; written word|w||
câu|sentence|w||
nghĩa|meaning|w||
tiếng|language; sound|w||Tiếng Việt = the Vietnamese language
tên|name|p||Anh tên gì? = What's your name?
tuổi|age; years old|p||
số|number|n||Số điện thoại = phone number
bạn thân|best friend|p||
em bé|baby|p||
con nít|kids|p|trẻ con|
người lớn|adult|p||
đàn ông|man|p||
phụ nữ|woman|p||
Vậy hả?|Oh really? Is that so?|k|Thế à?|
Đúng rồi.|That's right.|k||
Không phải.|No, that's not it.|k||
Hay quá!|Great! How interesting!|k||
Tiếc quá.|What a pity.|k||
Tội nghiệp.|Poor thing.|k||
Chúc mừng nha!|Congratulations!|k||
Chắc vậy.|Probably. I guess so.|k||
Tui cũng vậy.|Me too.|k|Tôi cũng thế.|
Tùy anh.|Up to you.|k||
Sao cũng được.|Anything's fine.|k||
Không vấn đề gì.|No problem.|k||
Để tui coi.|Let me see.|k|Để tôi xem.|
Để tui nghĩ đã.|Let me think first.|k||
Từ từ đã.|Hold on a sec.|k||
Đi đâu đó?|Where are you off to? (casual greeting)|k||
Ăn cơm chưa?|Have you eaten? (everyday greeting)|k||
Dạo này sao rồi?|How have you been lately?|k|Dạo này thế nào?|
Lâu quá không gặp!|Long time no see!|k||
Cũng được.|It's OK. Not bad.|k||
Mệt quá!|So tired!|k||
Đói bụng quá.|I'm starving.|k||
Nóng quá trời!|So hot!|k||
Vui quá!|So much fun!|k||
Kệ đi.|Let it go. Forget it.|k||
Xin lỗi, tui không hiểu.|Sorry, I don't understand.|k||
Anh nói lại được không?|Could you say that again?|k||
Nói chậm chút được không?|Could you speak a bit slower?|k||
Cái này tiếng Việt nói sao?|How do you say this in Vietnamese?|k|Cái này tiếng Việt nói thế nào?|
Chữ này nghĩa là gì?|What does this word mean?|k||
Tui đang học tiếng Việt.|I'm learning Vietnamese.|k||
Tui nói tiếng Việt chưa giỏi.|My Vietnamese isn't good yet.|k||
Anh nói tiếng Anh được không?|Do you speak English?|k||
Giúp tui với!|Help me, please!|k||
Chỉ đường giùm tui.|Could you show me the way?|k||
Nhà vệ sinh ở đâu vậy?|Where's the toilet?|k||
Cho tui hỏi chút.|Excuse me, may I ask something?|k||
Có wifi không?|Is there wifi?|k||
Tui bị lạc rồi.|I'm lost.|k||
Tui bị mất điện thoại.|I've lost my phone.|k||
Gọi cấp cứu!|Call an ambulance!|k||
Tui cần bác sĩ.|I need a doctor.|k||
Đau quá!|It hurts!|k||
Cho tui coi thực đơn.|Can I see the menu?|k|Cho tôi xem thực đơn.|
Món nào ngon nhất?|What's the best dish?|k||
Không cay nha.|Not spicy, please.|k||
Thêm đá.|More ice.|k||
Đừng bỏ hành.|No onions, please.|k||
Tính tiền giùm.|The bill, please.|k||
Chúc ngon miệng!|Enjoy your meal!|k||
Cái này bao nhiêu?|How much is this?|k||
Có cỡ lớn hơn không?|Do you have a bigger size?|k||
Cho tui thử được không?|Can I try it on?|k||
Tui coi thôi.|I'm just looking.|k|Tôi chỉ xem thôi.|
Anh làm nghề gì?|What do you do (for work)?|k||
Anh bao nhiêu tuổi?|How old are you?|k||
Tui tới từ Singapore.|I'm from Singapore.|k||
Mình đi chơi nha!|Let's go out!|k||
Hẹn gặp lại sau.|See you later.|k||
Ngủ ngon nha.|Sleep well.|k||
Về tới nhà chưa?|Are you home yet?|k||
Nhắn tin cho tui nha.|Text me.|k||
Cho tui xin số điện thoại.|Can I have your number?|k||
Cho tui xin Zalo.|Can I have your Zalo?|k||Zalo is Vietnam's main messaging app
Tui đồng ý.|I agree.|k||
Tui không nghĩ vậy.|I don't think so.|k||
Có lẽ.|Maybe.|k||
Chắc chắn rồi.|Definitely.|k||
Không chắc.|Not sure.|k||
Được thôi.|Fine, OK.|k||
Thôi, khỏi.|No thanks, no need.|k|Thôi, không cần.|
Khỏi lo.|Don't worry about it.|k|Đừng lo.|
Ờ…|Uh… (filler)|k||
Thì…|Well… (filler)|k||
Kiểu như…|Like… (filler)|k||
Nói chung là…|Basically…|k||
Thiệt ra…|Actually…|k|Thật ra…|
Ủa?|Huh? Wait, what? (surprise)|k||
Trời đất ơi!|Oh my goodness!|k||
Ghê vậy!|Wow, seriously?|k||
Hên quá!|Lucky!|k|May quá!|
Xui quá!|Bad luck!|k||
Đã quá!|So satisfying!|k||
Thôi đi!|Come on! Stop it!|k||
Đi nè!|Let's go!|k||
Tới rồi nè.|Here we are.|k||
Coi chừng!|Watch out!|k||
anh yêu|darling (to a partner who is anh)|r||
em yêu|darling (to a partner who is em)|r||
cưng|sweetie|r||Southern, very common between couples
bé|babe|r||
Anh yêu em.|I love you (said by the anh)|r||
Em yêu anh.|I love you (said by the em)|r||
Anh thương em nhiều lắm.|I love you so much (warm, Southern)|r||
Nhớ em quá.|I miss you so much.|r||
Ôm anh đi.|Hug me.|r||
Hôn anh đi.|Kiss me.|r||
Cho anh ôm chút.|Let me hold you for a bit.|r||
Em đẹp trai quá.|You're so handsome.|r||
Anh muốn ở bên em.|I want to be with you.|r||
quen nhau|be dating|r||Southern: Hai đứa quen nhau lâu chưa? = Have you two been dating long?
hẹn hò|go on a date|r||
người yêu cũ|ex|r||
ghen|jealous|r||
Đừng ghen nữa.|Stop being jealous.|r||
đồng tính|gay; homosexual (neutral term)|r||Most people simply say gay
công khai|be out; open about it|r||
Lại đây.|Come here.|r||
Anh muốn em.|I want you.|r||
Nhẹ thôi.|Gently.|r||
Mạnh hơn đi.|Harder.|r||
Chậm lại.|Slow down.|r||
Đừng dừng lại.|Don't stop.|r||
Sướng quá.|That feels so good.|r||
Thích quá.|I love that.|r||
Được không?|Is this OK?|r||Checking in with your partner
Em có thích không?|Do you like it?|r||
Dừng lại.|Stop.|r||Always respected, no questions asked
bao cao su|condom|r||Often shortened to bao
Có bao không?|Do you have a condom?|r||
Mình làm an toàn nha.|Let's be safe.|r||
Anh xét nghiệm gần đây chưa?|Have you been tested recently?|r||
`;

/* Tranche 9 additions */
const VI_VOCAB_RAW_T9 = `
thả thính|flirt (slang, lit. "throw bait")|r||Very common among young Saigonese
tán|hit on; court someone|r||Anh đang tán em hả? = Are you hitting on me?
Anh đang tán em hả?|Are you hitting on me?|r||
bồ|partner (casual)|r||Southern; có bồ = to have a partner
có bồ|have a partner|r||Anh có bồ chưa? = Are you seeing someone?
app hẹn hò|dating app|r||
gặp mặt|meet in person|r||Used when moving from chatting to meeting
người tình|lover|r||
nụ hôn|a kiss|r||
cái ôm|a hug|r||
âu yếm|cuddle; caress|r||
hấp dẫn|attractive|r||
quyến rũ|seductive; charming|r||
gợi cảm|sexy|r||
Em dễ thương quá.|You're so cute.|r||
Hôm nay em đẹp trai quá.|You look so handsome today.|r||
Em là của anh.|You're mine.|r||
Anh chỉ thương mình em.|I only love you.|r||
Em làm anh điên lên.|You drive me crazy.|r||
chia tay|break up|r||
làm lành|make up (after a fight)|r||
Em giận anh hả?|Are you mad at me?|r||
Anh xin lỗi mà.|I'm sorry, OK?|r||
Mình về nhà anh nha?|Shall we go back to my place?|r||
Ở lại với anh đêm nay nha.|Stay with me tonight.|r||
ngủ chung|sleep together; share a bed|r||
Ôm chặt anh đi.|Hold me tight.|r||
Hôn nữa đi.|Kiss me more.|r||
Tắt đèn đi.|Turn off the light.|r||
Cởi áo ra đi.|Take your shirt off.|r||
Anh thích em như vậy.|I like you like this.|r||
Từ từ thôi.|Take it slow.|r||
Nhanh lên.|Faster.|r||
Sướng không?|Does it feel good?|r||
Anh sướng quá.|It feels so good (for me).|r||
Đau không?|Does it hurt?|r||Check in, and slow down if the answer is yes
Thoải mái không?|Are you comfortable?|r||
Anh sắp ra rồi.|I'm about to come.|r||
Mình nghỉ chút nha.|Let's take a break.|r||
Tuyệt quá.|That was amazing.|r||
làm tình|make love|r||
quan hệ|have sex (lit. "relations")|r||Polite euphemism
nứng|horny|r||Crude slang: only with a partner, never in public
Không, anh không muốn.|No, I don't want to.|r||
Em chưa sẵn sàng.|I'm not ready.|r||
Em muốn anh vào trong em.|I want you inside me.|r||
Vào đi anh.|Come in. Put it in.|r||
Sướng quá, em không kiềm chế được.|It feels so good, I can't control myself.|r||
Sướng quá, em chịu không nổi.|It feels so good, I can't take it.|r||Southern word order: chịu không nổi
Anh làm em sướng quá.|You make me feel so good.|r||
Em thích cảm giác này.|I love this feeling.|r||
Sâu nữa đi.|Deeper.|r||
Chậm thôi anh.|Slower, babe.|r||
Đừng rút ra.|Don't pull out.|r||
Ra trong em đi.|Come inside me.|r||
Em sắp ra rồi.|I'm about to come.|r||
Ra chung nha.|Let's come together.|r||
Lần nữa nha?|Again?|r||
Anh có sao không?|Are you OK? (after)|r||
Ôm em ngủ đi.|Hold me while we sleep.|r||
Mình đều xét nghiệm rồi.|We've both been tested.|r||
Anh có uống PrEP không?|Are you on PrEP?|r||PrEP is widely available in Vietnam
Mình không cần bao nữa ha?|We don't need condoms anymore, right?|r||Only once you have both agreed
`;

const VI_VOCAB = (VI_VOCAB_RAW.trim() + '\n' + VI_VOCAB_RAW_T4.trim() + '\n' + VI_VOCAB_RAW_T8.trim() + '\n' + VI_VOCAB_RAW_T9.trim()).split('\n').map((line, i) => {
  const [vi, en, cat, north, note] = line.split('|');
  return { id: 'w' + i, vi, en, cat, north: north || '', note: note || '' };
});

/* Southern tone system. Chao-style pitch values (1 = low, 5 = high).
   Hỏi and ngã are merged in Saigon speech. */
const VI_TONES = [
  { key: 'ngang', name: 'Ngang', mark: 'none', example: 'ma', pts: [3, 3], desc: 'Mid and level. Flat, like a held note.' },
  { key: 'huyen', name: 'Huyền', mark: 'grave  ̀', example: 'mà', pts: [2, 1], desc: 'Low and gently falling. Relaxed, slightly breathy.' },
  { key: 'sac', name: 'Sắc', mark: 'acute  ́', example: 'má', pts: [3, 5], desc: 'Rising, high at the end. Like a surprised "huh?"' },
  { key: 'hoinga', name: 'Hỏi / Ngã', mark: 'hook  ̉ / tilde  ̃', example: 'mả · mã', pts: [2, 1, 4], desc: 'Dips, then rises. In the South both marks sound the same; spelling still separates them.' },
  { key: 'nang', name: 'Nặng', mark: 'dot below  ̣', example: 'mạ', pts: [2, 1, 2], desc: 'Low, dips and comes back up a little. Short. Southerners do not cut it off sharply like Hanoi speakers.' }
];

/* Minimal tone sets: same syllable, different tones */
const VI_TONE_SETS = [
  { base: 'ma', words: [['ma', 'ghost'], ['mà', 'but'], ['má', 'mom / cheek'], ['mả', 'grave'], ['mã', 'horse (Sino) / code'], ['mạ', 'rice seedling']] },
  { base: 'ba', words: [['ba', 'three / dad'], ['bà', 'grandmother'], ['bá', 'overlord'], ['bả', 'she (that woman)'], ['bã', 'residue'], ['bạ', 'haphazard']] },
  { base: 'co', words: [['co', 'shrink'], ['cò', 'stork'], ['có', 'have'], ['cỏ', 'grass'], ['cọ', 'paintbrush']] },
  { base: 'la', words: [['la', 'shout'], ['là', 'to be'], ['lá', 'leaf'], ['lả', 'exhausted'], ['lạ', 'strange']] },
  { base: 'hai', words: [['hai', 'two'], ['hài', 'comedy'], ['hái', 'pick (fruit)'], ['hải', 'sea (Sino)'], ['hại', 'harm']] },
  { base: 'ban', words: [['ban', 'committee'], ['bàn', 'table'], ['bán', 'sell'], ['bạn', 'friend']] },
  { base: 'mua', words: [['mua', 'buy'], ['mùa', 'season'], ['múa', 'dance']] },
  { base: 'cam', words: [['cam', 'orange'], ['cám', 'bran'], ['cảm', 'feel (Sino)'], ['cạm', 'trap']] },
  { base: 'tam', words: [['tam', 'three (Sino)'], ['tám', 'eight'], ['tạm', 'temporary']] },
  { base: 'cha', words: [['cha', 'father'], ['chà', 'scrub'], ['chả', 'pork roll / grilled patty'], ['chạ', 'mixed up']] }
];

/* Southern sound rules — shown on cards when they apply */
const VI_SOUND_RULES = [
  { id: 'v', test: w => /(^|\s)v/i.test(w), label: 'v → "y"', text: 'Saigon speakers often say v like English y: về sounds like "yề".' },
  { id: 'd', test: w => /(^|\s)(d|gi)(?!h)/i.test(w.replace(/đ/gi, '')), label: 'd / gi → "y"', text: 'd and gi are both said like English y: dạ sounds like "yạ".' },
  { id: 'r', test: w => /(^|\s)r/i.test(w), label: 'r → soft r', text: 'r is a soft English-style r (or a light g-like sound), never rolled.' },
  { id: 'nh', test: w => /nh(\s|$|[?!.,])/i.test(w), label: 'final -nh → -n', text: 'Final -nh sounds like -n: anh is "an".' },
  { id: 'ch', test: w => /ch(\s|$|[?!.,])/i.test(w), label: 'final -ch → -t', text: 'Final -ch sounds like -t: sạch is close to "sạt".' },
  { id: 'n', test: w => /[^nh]n(\s|$|[?!.,])/i.test(w.normalize('NFC')), label: 'final -n → -ng', text: 'After most vowels, final -n is said -ng: bạn sounds like "bạng".' },
  { id: 't', test: w => /[aeou][\u0300-\u036f]*t(\s|$|[?!.,])/i.test(w.normalize('NFD')), label: 'final -t → -c', text: 'After most vowels, final -t is said -c (an unreleased k): mắt sounds like "mắc".' },
  { id: 'qu', test: w => /(^|\s)qu/i.test(w), label: 'qu → "w"', text: 'qu is said w: quận sounds like "wận".' },
  { id: 'hn', test: w => /[̉̃]/.test(w.normalize('NFD')), label: 'hỏi = ngã', text: 'The hook (hỏi) and tilde (ngã) tones sound the same in the South: a dip then a rise.' }
];

/* Kanji bridge: Sino-Vietnamese ↔ Japanese on'yomi
   [kanji, vietnamese, kana, romaji, meaning, flag, note]
   flag: '' normal, 'ff' false friend, 'rev' order reversed in Vietnamese */
const VI_BRIDGE = [
  ['注意', 'chú ý', 'ちゅうい', 'chūi', 'attention', '', ''],
  ['経済', 'kinh tế', 'けいざい', 'keizai', 'economy', '', ''],
  ['準備', 'chuẩn bị', 'じゅんび', 'junbi', 'preparation', '', ''],
  ['大学', 'đại học', 'だいがく', 'daigaku', 'university', '', ''],
  ['問題', 'vấn đề', 'もんだい', 'mondai', 'problem / issue', '', ''],
  ['時間', 'thời gian', 'じかん', 'jikan', 'time', '', ''],
  ['世界', 'thế giới', 'せかい', 'sekai', 'world', '', ''],
  ['国家', 'quốc gia', 'こっか', 'kokka', 'nation', '', ''],
  ['家庭', 'gia đình', 'かてい', 'katei', 'family / household', '', 'In Vietnamese this is the everyday word for "family".'],
  ['電話', 'điện thoại', 'でんわ', 'denwa', 'telephone', '', ''],
  ['銀行', 'ngân hàng', 'ぎんこう', 'ginkō', 'bank', '', ''],
  ['市場', 'thị trường', 'しじょう', 'shijō', 'market (economic)', '', 'A physical market is chợ.'],
  ['文化', 'văn hóa', 'ぶんか', 'bunka', 'culture', '', ''],
  ['歴史', 'lịch sử', 'れきし', 'rekishi', 'history', '', ''],
  ['安全', 'an toàn', 'あんぜん', 'anzen', 'safety', '', ''],
  ['自由', 'tự do', 'じゆう', 'jiyū', 'freedom', '', ''],
  ['幸福', 'hạnh phúc', 'こうふく', 'kōfuku', 'happiness', '', ''],
  ['結婚', 'kết hôn', 'けっこん', 'kekkon', 'marriage', '', ''],
  ['感動', 'cảm động', 'かんどう', 'kandō', 'moved (emotionally)', '', ''],
  ['意見', 'ý kiến', 'いけん', 'iken', 'opinion', '', ''],
  ['経験', 'kinh nghiệm', 'けいけん', 'keiken', 'experience', '', ''],
  ['研究', 'nghiên cứu', 'けんきゅう', 'kenkyū', 'research', '', ''],
  ['発展', 'phát triển', 'はってん', 'hatten', 'development', '', ''],
  ['政府', 'chính phủ', 'せいふ', 'seifu', 'government', '', ''],
  ['法律', 'pháp luật', 'ほうりつ', 'hōritsu', 'law', '', ''],
  ['病院', 'bệnh viện', 'びょういん', 'byōin', 'hospital', '', ''],
  ['機長', 'cơ trưởng', 'きちょう', 'kichō', 'captain (aircraft)', '', ''],
  ['航空', 'hàng không', 'こうくう', 'kōkū', 'aviation', '', 'Vietnam Airlines = Hãng Hàng không Quốc gia Việt Nam.'],
  ['出発', 'xuất phát', 'しゅっぱつ', 'shuppatsu', 'departure / set out', '', ''],
  ['交通', 'giao thông', 'こうつう', 'kōtsū', 'traffic', '', ''],
  ['運動', 'vận động', 'うんどう', 'undō', 'exercise / movement', '', ''],
  ['会議', 'hội nghị', 'かいぎ', 'kaigi', 'conference', '', ''],
  ['社会', 'xã hội', 'しゃかい', 'shakai', 'society', '', ''],
  ['公園', 'công viên', 'こうえん', 'kōen', 'park', '', ''],
  ['動物', 'động vật', 'どうぶつ', 'dōbutsu', 'animal', '', ''],
  ['植物', 'thực vật', 'しょくぶつ', 'shokubutsu', 'plant', '', ''],
  ['音楽', 'âm nhạc', 'おんがく', 'ongaku', 'music', '', ''],
  ['美術', 'mỹ thuật', 'びじゅつ', 'bijutsu', 'fine arts', '', ''],
  ['科学', 'khoa học', 'かがく', 'kagaku', 'science', '', ''],
  ['文学', 'văn học', 'ぶんがく', 'bungaku', 'literature', '', ''],
  ['言語', 'ngôn ngữ', 'げんご', 'gengo', 'language', '', ''],
  ['地理', 'địa lý', 'ちり', 'chiri', 'geography', '', ''],
  ['都市', 'đô thị', 'とし', 'toshi', 'city / urban', '', ''],
  ['中心', 'trung tâm', 'ちゅうしん', 'chūshin', 'centre', '', ''],
  ['方法', 'phương pháp', 'ほうほう', 'hōhō', 'method', '', ''],
  ['目的', 'mục đích', 'もくてき', 'mokuteki', 'purpose', '', ''],
  ['成功', 'thành công', 'せいこう', 'seikō', 'success', '', ''],
  ['失敗', 'thất bại', 'しっぱい', 'shippai', 'failure', '', ''],
  ['希望', 'hy vọng', 'きぼう', 'kibō', 'hope', '', ''],
  ['記念', 'kỷ niệm', 'きねん', 'kinen', 'commemoration', '', 'In Vietnamese it also means a memory or keepsake.'],
  ['練習', 'luyện tập', 'れんしゅう', 'renshū', 'practice', '', ''],
  ['紹介', 'giới thiệu', 'しょうかい', 'shōkai', 'introduction', '', ''],
  ['解決', 'giải quyết', 'かいけつ', 'kaiketsu', 'solve / resolve', '', ''],
  ['決定', 'quyết định', 'けってい', 'kettei', 'decide / decision', '', ''],
  ['主要', 'chủ yếu', 'しゅよう', 'shuyō', 'main / chiefly', '', ''],
  ['安心', 'an tâm', 'あんしん', 'anshin', 'peace of mind', '', ''],
  ['心理', 'tâm lý', 'しんり', 'shinri', 'psychology', '', ''],
  ['生活', 'sinh hoạt', 'せいかつ', 'seikatsu', 'daily life / activities', '', ''],
  ['自然', 'tự nhiên', 'しぜん', 'shizen', 'nature / natural', '', ''],
  ['気候', 'khí hậu', 'きこう', 'kikō', 'climate', '', ''],
  ['熱帯', 'nhiệt đới', 'ねったい', 'nettai', 'tropics', '', ''],
  ['歓迎', 'hoan nghênh', 'かんげい', 'kangei', 'welcome', '', ''],
  ['便利', 'tiện lợi', 'べんり', 'benri', 'convenient', '', ''],
  ['不便', 'bất tiện', 'ふべん', 'fuben', 'inconvenient', '', ''],
  ['漢字', 'Hán tự', 'かんじ', 'kanji', 'Chinese characters', '', ''],
  ['日本', 'Nhật Bản', 'にほん', 'nihon', 'Japan', '', ''],
  ['越南', 'Việt Nam', 'えつなん', 'etsunan', 'Vietnam', '', 'Japanese now writes ベトナム, but 越南 is the source of the name.'],
  ['東京', 'Đông Kinh', 'とうきょう', 'tōkyō', 'Tokyo', '', 'Đông Kinh was also an old name for Hanoi, the root of "Tonkin".'],
  ['簡単', 'đơn giản', 'かんたん', 'kantan', 'simple', 'rev', 'Vietnamese uses the reversed order 單簡.'],
  ['平和', 'hòa bình', 'へいわ', 'heiwa', 'peace', 'rev', 'Vietnamese uses the reversed order 和平.'],
  ['勉強', 'miễn cưỡng', 'べんきょう', 'benkyō', 'JP: study · VN: reluctantly', 'ff', 'Classic trap. To study in Vietnamese is học.'],
  ['情報', 'tình báo', 'じょうほう', 'jōhō', 'JP: information · VN: intelligence (espionage)', 'ff', '"Information" in Vietnamese is thông tin 通信.'],
  ['通信', 'thông tin', 'つうしん', 'tsūshin', 'JP: communication · VN: information', 'ff', ''],
  ['工作', 'công tác', 'こうさく', 'kōsaku', 'JP: handicraft, manoeuvring · VN: work assignment', 'ff', 'Đi công tác = go on a business trip.'],
  ['大丈夫', 'đại trượng phu', 'だいじょうぶ', 'daijōbu', 'JP: all right · VN: a real man', 'ff', ''],
  ['博士', 'bác sĩ', 'はかせ', 'hakase', 'JP: PhD, expert · VN: medical doctor', 'ff', 'A PhD in Vietnamese is tiến sĩ 進士.'],
  ['学生', 'học sinh', 'がくせい', 'gakusei', 'JP: student · VN: school pupil', 'ff', 'A university student is sinh viên 生員.'],
  ['先生', 'tiên sinh', 'せんせい', 'sensei', 'JP: teacher · VN: "sir" (old-fashioned)', 'ff', 'Teacher is thầy (male) or cô (female).']
];

/* Systematic sound correspondences */
const VI_BRIDGE_RULES = [
  { jp: '-ん', vi: '-n / -m', ex: '安 an / an · 心 tâm / shin · 南 nam / nan' },
  { jp: '-ku / -ki', vi: '-c / -ch', ex: '学 học / gaku · 国 quốc / koku · 歴 lịch / reki' },
  { jp: '-tsu / -chi / っ', vi: '-t', ex: '発 phát / hatsu · 失 thất / shitsu · 結 kết / ketsu' },
  { jp: '-u (old -fu)', vi: '-p', ex: '法 pháp / hō · 十 thập / jū · 合 hợp / gō' },
  { jp: '-ō / -ei', vi: '-ng / -nh', ex: '行 hành / kō · 生 sinh / sei · 経 kinh / kei' }
];

/* ===================== Tranche 2 ===================== */

/* Pronoun builder. Inputs: listener age relative to you, listener sex, your sex, setting. */
const VI_PRONOUN_AGES = [
  { key: 'grand', label: 'Grandparent age', hint: 'Roughly 70+' },
  { key: 'olderParent', label: 'Older than your parents', hint: '' },
  { key: 'youngerParent', label: 'Your parents’ age, but younger', hint: '' },
  { key: 'older', label: 'A bit older than you', hint: 'About 3–15 years' },
  { key: 'peer', label: 'About your age', hint: '' },
  { key: 'younger', label: 'Younger adult', hint: '' },
  { key: 'child', label: 'A child', hint: '' }
];
const VI_THIRD = { 'ông': 'ổng', 'bà': 'bả', 'anh': 'ảnh', 'chị': 'chỉ', 'cô': 'cổ', 'em': 'ẻm', 'chú': 'chú ấy', 'bác': 'bác ấy', 'bạn': 'bạn ấy', 'con': 'nó' };

function viPronouns(age, them, me, setting) {
  // them / me: 'm' | 'f'; setting: 'polite' | 'friends'
  let you, I, note = '', older = false;
  switch (age) {
    case 'grand': you = them === 'm' ? 'ông' : 'bà'; I = 'con'; older = true;
      note = 'Cháu also works for "I". Southerners usually say con.'; break;
    case 'olderParent': you = 'bác'; I = 'con'; older = true;
      note = 'In the South, bác covers both men and women older than your parents.'; break;
    case 'youngerParent': you = them === 'm' ? 'chú' : 'cô'; I = 'con'; older = true;
      note = 'Use this for vendors, drivers and neighbours who are your parents’ age.'; break;
    case 'older': you = them === 'm' ? 'anh' : 'chị'; I = 'em'; older = true;
      note = 'The safe default for staff and strangers who look a little older than you.'; break;
    case 'peer':
      if (setting === 'friends') { you = 'bạn'; I = 'tui'; note = 'Close Southern friends often call each other ông and bà as a joke, or mày and tao, which is rude outside close friendships.'; }
      else { you = them === 'm' ? 'anh' : 'chị'; I = 'tôi'; note = 'Calling a stranger your age anh or chị is a polite compliment.'; }
      break;
    case 'younger': you = 'em'; I = me === 'm' ? 'anh' : 'chị';
      note = 'Use this for waiters, shop staff and anyone clearly younger.'; break;
    case 'child': you = 'con'; I = me === 'm' ? 'chú' : 'cô';
      note = 'If you are under about 25, say anh or chị for "I" instead.'; break;
  }
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const third = VI_THIRD[you] || (you + ' ấy');
  const lines = [
    [`${cap(you)} ơi!`, `Excuse me! (calling them)`],
    [`${older ? 'Dạ, ' + you : cap(you)} ơi, ${I} hỏi chút nha.`, `Excuse me, can I ask you something?`],
    [`${cap(I)} cám ơn ${you} nhiều.`, `Thank you very much.`],
    [`${cap(third)} đi đâu rồi?`, `Where did ${them === 'm' ? 'he' : 'she'} go? (talking about them)`]
  ];
  return { you, I, third, note, older, lines };
}

/* Classifiers. Rows: classifier | noun | english | note. Southern usage. */
const VI_CLASSIFIERS = {
  'con': { en: 'animals, and some long or moving things', north: '' },
  'cái': { en: 'general objects', north: '' },
  'chiếc': { en: 'vehicles; one of a pair', north: '' },
  'cuốn': { en: 'books and bound things', north: 'quyển' },
  'tờ': { en: 'sheets of paper', north: '' },
  'cây': { en: 'long, thin objects', north: 'cái' },
  'trái': { en: 'fruit and round things', north: 'quả' },
  'ly': { en: 'a glass of (drinks)', north: 'cốc' },
  'tô': { en: 'a large bowl of (noodle soups)', north: 'bát' },
  'dĩa': { en: 'a plate of', north: 'đĩa' },
  'chai': { en: 'a bottle of', north: '' },
  'căn': { en: 'houses, rooms, apartments', north: '' },
  'đôi': { en: 'a pair of', north: '' },
  'bông': { en: 'flowers', north: 'bông / hoa' }
};
const VI_CLASS_ITEMS_RAW = `
con|chó|a dog|
con|mèo|a cat|
con|gà|a chicken|
con|cá|a fish|
con|dao|a knife|Long, sharp things can take con
con|đường|a road|Roads and rivers move, so they take con
con|sông|a river|
cái|bàn|a table|
cái|ghế|a chair|
cái|áo|a shirt|
cái|nón|a hat|Hanoi: cái mũ
cái|điện thoại|a phone|
cái|muỗng|a spoon|Hanoi: cái thìa
cái|chén|a bowl (empty)|For a bowl of food, chén is itself the classifier: một chén cơm
chiếc|xe|a car / a motorbike|Cái xe is also common in casual speech
chiếc|máy bay|an airplane|
chiếc|đồng hồ|a watch|
cuốn|sách|a book|Hanoi: quyển sách
cuốn|tập|a notebook|Hanoi: quyển vở
cuốn|từ điển|a dictionary|
tờ|giấy|a sheet of paper|
tờ|báo|a newspaper|
cây|viết|a pen|Hanoi: cái bút
cây|dù|an umbrella|Hanoi: cái ô
trái|xoài|a mango|Hanoi: quả xoài
trái|dừa|a coconut|
trái|chuối|a banana|
ly|cà phê|a (glass of) coffee|Hanoi: cốc cà phê
ly|trà đá|a glass of iced tea|
ly|nước cam|a glass of orange juice|
tô|phở|a bowl of phở|
tô|hủ tiếu|a bowl of hủ tiếu|
tô|bún bò|a bowl of bún bò|
dĩa|cơm tấm|a plate of broken rice|Hanoi: đĩa
dĩa|gỏi cuốn|a plate of fresh rolls|
chai|bia|a bottle of beer|
chai|nước suối|a bottle of water|Nước suối = bottled water in the South
căn|nhà|a house|
căn|phòng|a room|
căn|hộ|an apartment|
đôi|đũa|a pair of chopsticks|
đôi|giày|a pair of shoes|
đôi|dép|a pair of sandals|
bông|hồng|a rose|
`;
const VI_CLASS_ITEMS = VI_CLASS_ITEMS_RAW.trim().split('\n').map(l => {
  const [cl, noun, en, note] = l.split('|');
  return { cl, noun, en, note: note || '' };
});

/* Audio file naming: FNV-1a 32-bit of the NFC text, as 8 hex digits.
   make_audio.py uses the same function, so file names always match. */
function viAudioKey(text) {
  const s = text.normalize('NFC').replace(/…/g, '').trim();
  let h = 0x811c9dc5;
  const bytes = new TextEncoder().encode(s);
  for (const b of bytes) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}

/* ===================== Tranche 3 ===================== */

/* Grammar patterns. ex rows: [vietnamese, english]. Southern everyday register. */
const VI_GRAMMAR = [
  { id: 'la', title: 'Saying what something is', formula: 'A + là + noun',
    text: 'Là links two nouns, like "is" in English. It never goes before an adjective.',
    ex: [['Tui là phi công.', 'I am a pilot.'], ['Đây là ba tui.', 'This is my dad.'], ['Anh là người Singapore hả?', 'You’re Singaporean?']],
    tip: 'Wrong: Trời là nóng. Right: Trời nóng.' },
  { id: 'adj', title: 'Describing things', formula: 'noun + adjective (+ quá / lắm)',
    text: 'Adjectives work like verbs, so no "is" is needed. Add quá or lắm after for "very", or rất before.',
    ex: [['Phở này ngon quá!', 'This phở is so good!'], ['Hôm nay nóng lắm.', 'It’s very hot today.'], ['Cà phê hơi ngọt.', 'The coffee is a bit sweet.']],
    tip: 'Quá is the most natural "so / very" in Saigon speech.' },
  { id: 'neg', title: 'Saying no', formula: 'không / hông + verb · không phải (là) + noun',
    text: 'Put không before the verb or adjective. With nouns, use không phải. In casual Southern speech không often becomes hông.',
    ex: [['Tui không biết.', 'I don’t know.'], ['Em hông ăn cay được.', 'I can’t eat spicy food.'], ['Tui không phải là người Nhật.', 'I’m not Japanese.']],
    tip: '' },
  { id: 'yn', title: 'Yes/no questions', formula: '(có) + verb + không?',
    text: 'Wrap the verb or adjective in có… không. Answer with có (yes) or the verb itself, or không (no).',
    ex: [['Anh có đói không?', 'Are you hungry?'], ['Em có rảnh không?', 'Are you free?'], ['Đi cà phê hông?', 'Wanna get coffee? (casual)']],
    tip: 'Polite answers start with dạ: Dạ có. Dạ không.' },
  { id: 'tense', title: 'Past, now and future', formula: 'đã / đang / sẽ + verb',
    text: 'Verbs never change form. Đã marks the past, đang an action in progress, sẽ the future. They are often dropped when a time word makes it clear.',
    ex: [['Tui đang ăn cơm.', 'I’m eating.'], ['Ngày mai tui sẽ bay đi Sài Gòn.', 'Tomorrow I’ll fly to Saigon.'], ['Hôm qua tui đi chợ.', 'Yesterday I went to the market.']],
    tip: '' },
  { id: 'chua', title: 'Already and not yet', formula: 'verb + chưa? → rồi / chưa',
    text: 'Ask "…yet?" with chưa at the end. Answer verb + rồi (already) or chưa (not yet).',
    ex: [['Anh ăn cơm chưa?', 'Have you eaten yet?'], ['Dạ, ăn rồi.', 'Yes, I have.'], ['Chưa, em đang kẹt xe.', 'Not yet, I’m stuck in traffic.']],
    tip: 'Ăn cơm chưa? is also an everyday greeting, like "how are you".' },
  { id: 'want', title: 'Want, need, like', formula: 'muốn / cần / thích + verb',
    text: 'These go straight before the verb, with nothing in between.',
    ex: [['Tui muốn đi chợ Bến Thành.', 'I want to go to Bến Thành market.'], ['Em cần đổi tiền.', 'I need to change money.'], ['Anh thích uống cà phê sữa đá.', 'I like iced milk coffee.']],
    tip: '' },
  { id: 'can', title: 'Can and able to', formula: 'verb + được · (có thể) + verb',
    text: 'Put được after the verb for "can". Có thể before the verb is more formal. Ask with … được không?',
    ex: [['Anh nói tiếng Việt được không?', 'Can you speak Vietnamese?'], ['Tui nói được chút chút.', 'I can speak a little.'], ['Ở đây trả bằng thẻ được không?', 'Can I pay by card here?']],
    tip: '' },
  { id: 'o', title: 'Where things are', formula: 'noun + ở + place',
    text: 'Ở means "at / in" and also "to live / stay".',
    ex: [['Khách sạn ở đâu?', 'Where is the hotel?'], ['Tui ở Quận 1.', 'I’m staying in District 1.'], ['Nhà vệ sinh ở bên trái.', 'The toilet is on the left.']],
    tip: '' },
  { id: 'cmp', title: 'Comparing', formula: 'adj + hơn · adj + nhất · adj + bằng',
    text: 'Hơn is "more than", nhất is "the most", bằng is "as … as".',
    ex: [['Sài Gòn nóng hơn Hà Nội.', 'Saigon is hotter than Hanoi.'], ['Quán này ngon nhất.', 'This place is the best.'], ['Cái này mắc bằng cái kia.', 'This one costs as much as that one.']],
    tip: '' },
  { id: 'this', title: 'This and that', formula: 'classifier + noun + này / đó / kia',
    text: 'Này (this), đó (that), kia (that over there) come after the noun.',
    ex: [['Cái này bao nhiêu tiền?', 'How much is this?'], ['Tô phở đó ngon quá.', 'That bowl of phở looks great.'], ['Chiếc xe kia của ai?', 'Whose motorbike is that over there?']],
    tip: '' },
  { id: 'cho', title: 'Ordering and asking for things', formula: 'cho + me + thing',
    text: 'Cho means "give". Cho tui… or cho em… is how you order or ask for anything.',
    ex: [['Cho tui một ly trà đá.', 'An iced tea, please.'], ['Cho em tính tiền.', 'The bill, please.'], ['Cho tui coi cái đó.', 'Let me see that one.']],
    tip: 'Use cho em with older staff, cho anh or cho chị with younger staff.' },
  { id: 'soft', title: 'Softening commands', formula: 'verb + đi / nha',
    text: 'Đi after a verb is an encouraging "go on". Nha makes a request friendly, like "OK?".',
    ex: [['Ăn đi, ngon lắm!', 'Go on, eat, it’s really good!'], ['Chờ chút nha.', 'Wait a moment, OK?'], ['Lẹ lên đi!', 'Hurry up!']],
    tip: 'Hanoi uses nhé where Saigon uses nha.' },
  { id: 'vi', title: 'Because… so…', formula: 'vì… nên…',
    text: 'Vì gives the reason, nên the result. Either half can stand alone.',
    ex: [['Vì trời mưa nên tui ở nhà.', 'It’s raining, so I’m staying home.'], ['Tui mệt nên đi ngủ sớm.', 'I’m tired, so I’m going to bed early.']],
    tip: '' },
  { id: 'neu', title: 'If… then…', formula: 'nếu… thì…',
    text: 'Nếu is "if", thì introduces the result.',
    ex: [['Nếu anh rảnh thì mình đi cà phê nha.', 'If you’re free, let’s get coffee.'], ['Nếu mắc quá thì tui không mua.', 'If it’s too expensive, I won’t buy it.']],
    tip: '' },
  { id: 'cua', title: 'Possession', formula: 'thing + (của) + owner',
    text: 'The owner comes after the thing. Của is often dropped for close things like family and home.',
    ex: [['Đây là xe của tui.', 'This is my motorbike.'], ['Nhà tui ở gần đây.', 'My house is near here.']],
    tip: '' },
  { id: 'wh', title: 'Question words stay in place', formula: '… + gì / đâu / ai / bao nhiêu?',
    text: 'Question words sit where the answer would go, so word order does not change.',
    ex: [['Anh tên gì?', 'What’s your name?'], ['Anh đi đâu vậy?', 'Where are you going?'], ['Cái này là gì?', 'What is this?']],
    tip: 'Vậy at the end makes a question sound natural and soft.' },
  { id: 'part', title: 'Southern particles', formula: '… + nha / hen / ha / nè',
    text: 'End particles carry tone of voice. These are the Saigon set.',
    ex: [['Mai gặp nha.', 'See you tomorrow, OK?'], ['Đẹp quá ha!', 'So pretty, huh!'], ['Nè, cầm cái này.', 'Here, hold this.']],
    tip: 'Hen is a warm "OK?" or "right?": Ngon hen? = Tasty, right?' },
  /* Tranche 8 */
  { id: 'bi', title: 'Things that happen to you', formula: 'bị + verb (bad) · được + verb (good)',
    text: 'Bị marks something unwelcome happening to you, được something welcome. This is how Vietnamese does the passive.',
    ex: [['Tui bị phạt.', 'I got fined.'], ['Em được khen.', 'I was praised.'], ['Anh bị kẹt xe hả?', 'Did you get stuck in traffic?']],
    tip: 'Bị also goes with illness: bị cảm (have a cold), bị sốt (have a fever).' },
  { id: 'dung', title: 'Don’t and not allowed', formula: 'đừng + verb · không được + verb',
    text: 'Đừng tells someone not to do something. Không được means it is not allowed.',
    ex: [['Đừng lo.', 'Don’t worry.'], ['Ở đây không được hút thuốc.', 'No smoking here.'], ['Đừng quên nha.', 'Don’t forget, OK?']],
    tip: '' },
  { id: 'phai', title: 'Must and should', formula: 'phải + verb · nên + verb',
    text: 'Phải is "have to". Nên is "should", a softer suggestion.',
    ex: [['Tui phải đi làm.', 'I have to go to work.'], ['Anh nên nghỉ ngơi.', 'You should rest.'], ['Mai em phải dậy sớm.', 'I have to get up early tomorrow.']],
    tip: '' },
  { id: 'sap', title: 'About to, just now', formula: 'sắp + verb · mới / vừa + verb',
    text: 'Sắp means about to happen. Mới and vừa mean it just happened.',
    ex: [['Máy bay sắp cất cánh.', 'The plane is about to take off.'], ['Tui mới tới.', 'I just arrived.'], ['Em vừa ăn xong.', 'I’ve just finished eating.']],
    tip: '' },
  { id: 'van', title: 'Still and more', formula: 'vẫn / còn + verb · … + nữa',
    text: 'Vẫn and còn mean "still". Nữa at the end means "more" or "again".',
    ex: [['Anh vẫn ở Sài Gòn hả?', 'Are you still in Saigon?'], ['Còn phòng không?', 'Are there rooms left?'], ['Cho tui thêm một ly nữa.', 'One more glass, please.']],
    tip: '' },
  { id: 'het', title: 'All gone', formula: 'hết + noun · hết rồi',
    text: 'Hết means used up or finished. Hết rồi is what you hear when something is sold out.',
    ex: [['Hết rồi anh ơi.', 'Sorry, it’s all gone.'], ['Tui hết tiền rồi.', 'I’m out of money.'], ['Hết giờ rồi.', 'Time’s up.']],
    tip: '' },
  { id: 'cang', title: 'The more… the more', formula: 'càng… càng…',
    text: 'Put càng before both halves.',
    ex: [['Càng học càng thích.', 'The more I study, the more I like it.'], ['Càng sớm càng tốt.', 'The sooner the better.']],
    tip: '' },
  { id: 'vua', title: 'Both… and…', formula: 'vừa… vừa…',
    text: 'Vừa before each of two qualities or actions happening together.',
    ex: [['Quán này vừa ngon vừa rẻ.', 'This place is both tasty and cheap.'], ['Anh ấy vừa ăn vừa nói.', 'He talks while he eats.']],
    tip: '' },
  { id: 'khi', title: 'Before, after, when', formula: 'trước khi · sau khi · khi / lúc',
    text: 'These go at the start of the time clause, like in English.',
    ex: [['Rửa tay trước khi ăn.', 'Wash your hands before eating.'], ['Sau khi ăn, mình đi dạo nha.', 'After eating, let’s go for a walk.'], ['Khi nào anh rảnh?', 'When are you free?']],
    tip: 'Khi nào at the start asks about the future; at the end it asks about the past: Anh tới khi nào? = When did you arrive?' },
  { id: 'chac', title: 'Probably and it seems', formula: 'chắc · hình như',
    text: 'Chắc is "probably". Hình như is "it seems" or "I think".',
    ex: [['Chắc trời sắp mưa.', 'It’s probably about to rain.'], ['Hình như anh mệt.', 'You seem tired.']],
    tip: '' },
  { id: 'thu', title: 'Try and see', formula: 'verb + thử (xem)',
    text: 'Thử after a verb means "try doing it". Adding xem makes it "and see".',
    ex: [['Anh ăn thử xem.', 'Try it and see.'], ['Em mặc thử được không?', 'Can I try it on?']],
    tip: '' },
  { id: 'gium', title: 'Do it for me', formula: 'verb + giùm / dùm (+ person)',
    text: 'Giùm (or dùm) is the Southern way to ask someone to do something for you.',
    ex: [['Chụp hình giùm tui với.', 'Could you take a photo for me?'], ['Mở cửa dùm em.', 'Open the door for me, please.']],
    tip: 'Hanoi uses hộ or giúp instead.' },
  { id: 'ma', title: 'But, and emphasis', formula: '… mà …',
    text: 'Mà links two contrasting ideas. At the end of a sentence it adds "I told you" or "you know".',
    ex: [['Đẹp mà mắc.', 'Pretty, but expensive.'], ['Tui nói rồi mà!', 'I already told you!']],
    tip: '' },
  { id: 'thi', title: 'Setting the topic', formula: 'topic + thì + comment',
    text: 'Thì marks what you are talking about, a bit like "as for…".',
    ex: [['Cà phê thì quán này ngon nhất.', 'As for coffee, this place is the best.'], ['Nếu mưa thì mình ở nhà.', 'If it rains, we’ll stay home.']],
    tip: '' },
  { id: 'tu', title: 'From… to…', formula: 'từ… tới / đến…',
    text: 'Works for places and times. Southerners usually say tới.',
    ex: [['Từ đây tới sân bay bao xa?', 'How far is it from here to the airport?'], ['Tui làm từ chín giờ tới năm giờ.', 'I work from nine to five.']],
    tip: '' },
  { id: 'de', title: 'In order to', formula: '… để + verb',
    text: 'Để gives the purpose.',
    ex: [['Tui học tiếng Việt để nói chuyện với bạn bè.', 'I’m learning Vietnamese to talk with friends.'], ['Đi sớm để khỏi kẹt xe.', 'Leave early to avoid traffic.']],
    tip: '' }
];

/* Dialogues. lines: [speaker, vietnamese, english] */
const VI_DIALOGUES = [
  { id: 'cafe', title: 'At a café', place: 'Quán cà phê · Quận 3',
    cast: 'You (older) order from a young staff member, so you are anh and they are em.',
    lines: [
      ['Staff', 'Dạ, anh uống gì?', 'What would you like to drink?'],
      ['You', 'Cho anh một ly cà phê sữa đá, ít đường nha.', 'An iced milk coffee, less sugar please.'],
      ['Staff', 'Dạ. Anh uống ở đây hay mang về?', 'Sure. For here or takeaway?'],
      ['You', 'Uống ở đây.', 'For here.'],
      ['Staff', 'Dạ, của anh hai mươi lăm ngàn.', 'That’s twenty-five thousand.'],
      ['You', 'Nè, gửi em.', 'Here you go.'],
      ['Staff', 'Dạ, cám ơn anh. Anh ngồi chờ chút nha.', 'Thank you. Please have a seat for a moment.']
    ] },
  { id: 'grab', title: 'Taking a Grab', place: 'Xe ôm Grab · Quận 1',
    cast: 'The driver is a bit older, so he is anh and you are em.',
    lines: [
      ['You', 'Dạ, anh cho em tới chợ Bến Thành.', 'To Bến Thành market, please.'],
      ['Driver', 'Ừ, lên xe đi em.', 'OK, hop on.'],
      ['You', 'Từ đây tới đó bao lâu anh?', 'How long from here to there?'],
      ['Driver', 'Kẹt xe quá, chắc khoảng hai mươi phút.', 'Traffic’s bad, probably about twenty minutes.'],
      ['You', 'Dạ, anh dừng ở đây được rồi.', 'You can stop here, thanks.'],
      ['Driver', 'Rồi, tới rồi nha em.', 'OK, we’re here.'],
      ['You', 'Cám ơn anh nha.', 'Thanks!']
    ] },
  { id: 'market', title: 'Bargaining at the market', place: 'Chợ Bến Thành',
    cast: 'The seller is your parents’ age, so she is cô and you are con.',
    lines: [
      ['Seller', 'Mua gì đi con! Áo đẹp lắm nè.', 'Come and buy! These shirts are lovely.'],
      ['You', 'Dạ, cái áo này bao nhiêu tiền cô?', 'How much is this shirt?'],
      ['Seller', 'Ba trăm ngàn.', 'Three hundred thousand.'],
      ['You', 'Mắc quá! Cô bớt chút đi.', 'Too expensive! Give me a discount.'],
      ['Seller', 'Rồi, hai trăm rưỡi nha.', 'OK, two hundred and fifty then.'],
      ['You', 'Hai trăm được không cô?', 'How about two hundred?'],
      ['Seller', 'Thôi được, lấy đi con.', 'Fine, take it.'],
      ['You', 'Dạ, cám ơn cô.', 'Thank you.']
    ] },
  { id: 'spa', title: 'At the massage spa', place: 'Spa · Quận 1',
    cast: 'The therapist is younger, so you are anh and they are em.',
    lines: [
      ['Therapist', 'Dạ, anh nằm xuống giùm em nha.', 'Please lie down for me.'],
      ['Therapist', 'Anh bị đau ở đâu?', 'Where does it hurt?'],
      ['You', 'Anh mỏi vai với lưng quá.', 'My shoulders and back are really stiff.'],
      ['Therapist', 'Dạ. Anh muốn mạnh hay nhẹ?', 'OK. Firm or gentle?'],
      ['You', 'Mạnh hơn chút nha em.', 'A bit firmer, please.'],
      ['Therapist', 'Chỗ này đau không anh?', 'Does this spot hurt?'],
      ['You', 'Hơi đau, nhưng được.', 'A little, but it’s fine.'],
      ['Therapist', 'Anh thở sâu, thả lỏng nha.', 'Breathe deeply and relax.']
    ] },
  { id: 'meet', title: 'Meeting someone new', place: 'Tiệc · a party',
    cast: 'Lan is a little older, so she is chị and Tom is em.',
    lines: [
      ['Tom', 'Chào chị, em tên Tom. Chị tên gì?', 'Hi, I’m Tom. What’s your name?'],
      ['Lan', 'Chị tên Lan. Em người ở đâu?', 'I’m Lan. Where are you from?'],
      ['Tom', 'Em là người Singapore. Em làm phi công.', 'I’m from Singapore. I’m a pilot.'],
      ['Lan', 'Giỏi quá! Em nói tiếng Việt hay ghê.', 'Impressive! Your Vietnamese is really good.'],
      ['Tom', 'Dạ, em mới học thôi. Chị nói chậm chút được không?', 'I’ve only just started. Could you speak a bit slower?'],
      ['Lan', 'Được chứ. Rất vui được gặp em.', 'Of course. Nice to meet you.']
    ] },
  /* Tranche 6 */
  { id: 'airport', title: 'Airport check-in', place: 'Sân bay Tân Sơn Nhất',
    cast: 'The check-in agent is younger, so you are anh and she is em.',
    lines: [
      ['Agent', 'Chào anh. Anh cho em xin hộ chiếu với vé nha.', 'Hello. May I have your passport and ticket?'],
      ['You', 'Đây em.', 'Here you go.'],
      ['Agent', 'Anh có hành lý ký gửi không?', 'Do you have any checked baggage?'],
      ['You', 'Có, một cái vali.', 'Yes, one suitcase.'],
      ['Agent', 'Anh muốn ngồi cửa sổ hay lối đi?', 'Window or aisle?'],
      ['You', 'Cho anh ghế cửa sổ nha.', 'A window seat, please.'],
      ['Agent', 'Dạ, đây là thẻ lên máy bay. Cửa số mười hai, lên máy bay lúc tám giờ rưỡi.', 'Here’s your boarding pass. Gate twelve, boarding at half past eight.'],
      ['You', 'Cám ơn em.', 'Thank you.']
    ] },
  { id: 'hotel', title: 'Hotel check-in', place: 'Khách sạn · Quận 1',
    cast: 'The receptionist is younger, so you are anh and he is em.',
    lines: [
      ['Reception', 'Dạ, chào anh. Anh đặt phòng chưa?', 'Hello. Do you have a booking?'],
      ['You', 'Anh đặt rồi, tên Tom.', 'Yes, under the name Tom.'],
      ['Reception', 'Dạ, anh cho em mượn hộ chiếu chút nha.', 'May I borrow your passport for a moment?'],
      ['You', 'Mấy giờ trả phòng vậy em?', 'What time is check-out?'],
      ['Reception', 'Dạ, mười hai giờ trưa. Ăn sáng từ sáu giờ tới mười giờ.', 'Twelve noon. Breakfast is from six to ten.'],
      ['You', 'Mật khẩu wifi là gì em?', 'What’s the wifi password?'],
      ['Reception', 'Dạ, mật khẩu ở sau thẻ phòng. Phòng anh ở lầu năm.', 'It’s on the back of your key card. Your room is on the fifth floor.'],
      ['You', 'Cám ơn em nha.', 'Thanks!']
    ] },
  { id: 'clinic', title: 'At the clinic', place: 'Phòng khám',
    cast: 'You call the doctor bác sĩ and yourself em; she calls you em.',
    lines: [
      ['Doctor', 'Em bị sao?', 'What seems to be the problem?'],
      ['You', 'Dạ, em bị sốt với ho từ hôm qua.', 'I’ve had a fever and a cough since yesterday.'],
      ['Doctor', 'Em có bị đau họng không?', 'Do you have a sore throat?'],
      ['You', 'Dạ có, hơi đau. Em cũng nhức đầu nữa.', 'Yes, a little. I have a headache too.'],
      ['Doctor', 'Em có dị ứng thuốc gì không?', 'Are you allergic to any medicine?'],
      ['You', 'Dạ không.', 'No.'],
      ['Doctor', 'Em bị cảm thôi. Uống thuốc này ngày hai lần, sau khi ăn.', 'It’s just a cold. Take this medicine twice a day, after meals.'],
      ['You', 'Dạ, cám ơn bác sĩ.', 'Thank you, doctor.']
    ] },
  { id: 'plans', title: 'Making plans with a friend', place: 'Nhắn tin · texting',
    cast: 'Close male friends in Saigon often call each other ông and themselves tui.',
    lines: [
      ['Minh', 'Tối nay ông rảnh không? Đi nhậu nha!', 'Are you free tonight? Let’s go for drinks!'],
      ['You', 'Tối nay tui bận rồi. Mai được không?', 'I’m busy tonight. How about tomorrow?'],
      ['Minh', 'Được. Mấy giờ?', 'Sure. What time?'],
      ['You', 'Bảy giờ tối nha. Ở đâu?', 'Seven in the evening. Where?'],
      ['Minh', 'Quán ốc gần nhà tui đi, ngon lắm.', 'The snail place near my house. It’s really good.'],
      ['You', 'Ok, tui đi Grab tới. Gửi địa chỉ cho tui nha.', 'OK, I’ll get a Grab there. Send me the address.'],
      ['Minh', 'Rồi, mai gặp nha!', 'Done. See you tomorrow!']
    ] },
  { id: 'date', title: 'Date night', place: 'Nhắn tin · texting', private: true,
    cast: 'Khang is older, so in this couple he is anh and Tom is em. Many Vietnamese gay couples use anh and em this way.',
    lines: [
      ['Khang', 'Tối nay em rảnh không? Anh mời em đi ăn nha.', 'Are you free tonight? Let me take you to dinner.'],
      ['Tom', 'Dạ rảnh. Mình đi đâu anh?', 'Yes, I’m free. Where are we going?'],
      ['Khang', 'Quán lẩu gần bờ sông, view đẹp lắm.', 'A hotpot place by the river. The view is beautiful.'],
      ['Tom', 'Nghe hay quá. Mấy giờ anh tới đón em?', 'Sounds great. What time will you pick me up?'],
      ['Khang', 'Bảy giờ nha. Nhớ em quá trời.', 'Seven. I miss you so much.'],
      ['Tom', 'Em cũng nhớ anh. Lát gặp nha!', 'I miss you too. See you soon!']
    ] }
];

/* ===================== Numbers (Southern conventions) =====================
   mốt (1 after 20+), tư (4 after 20+), lăm (5 after 10+), lẻ (zero tens), ngàn (thousand). */
const VI_DIGITS = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
function viTriple(n, full) {
  const h = Math.floor(n / 100), t = Math.floor(n / 10) % 10, u = n % 10, D = VI_DIGITS, out = [];
  if (h > 0 || full) out.push(D[h] + ' trăm');
  if (t === 0) { if (u > 0) out.push((h > 0 || full ? 'lẻ ' : '') + D[u]); }
  else if (t === 1) { out.push('mười'); if (u > 0) out.push(u === 5 ? 'lăm' : D[u]); }
  else { out.push(D[t] + ' mươi'); if (u > 0) out.push(u === 1 ? 'mốt' : u === 4 ? 'tư' : u === 5 ? 'lăm' : D[u]); }
  return out.join(' ');
}
function viNum(n) {
  if (n === 0) return 'không';
  const groups = [Math.floor(n / 1e6), Math.floor(n / 1e3) % 1000, n % 1000], names = ['triệu', 'ngàn', ''];
  const out = []; let started = false;
  groups.forEach((g, i) => {
    if (g === 0) return;
    out.push((viTriple(g, started) + (names[i] ? ' ' + names[i] : '')).trim());
    started = true;
  });
  return out.join(' ');
}
const fmtVnd = n => n.toLocaleString('de-DE') + 'đ';
const VI_NUM_POOL = (() => {
  const items = [];
  [0, 1, 4, 5, 7, 10, 11, 14, 15, 19, 20, 21, 24, 25, 30, 31, 34, 35, 45, 55, 68, 99, 100, 101, 105, 110, 115, 150, 205, 999,
   1000, 1005, 1050, 2026, 10000, 15000, 100000, 1000000, 2500000].forEach(n =>
    items.push({ kind: 'number', show: n.toLocaleString('de-DE'), answer: String(n), vi: viNum(n) }));
  [5, 8, 10, 12, 15, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 85, 95, 100, 120, 150, 180, 200, 250, 300, 350, 450, 500,
   1200, 1500, 2000, 3500].forEach(k => {
    const n = k * 1000;
    items.push({ kind: 'price', show: fmtVnd(n), answer: String(n), vi: viNum(n) });
  });
  [[6, 0, 'sáng'], [6, 30, 'sáng'], [7, 15, 'sáng'], [8, 0, 'sáng'], [8, 30, 'sáng'], [9, 45, 'sáng'], [10, 5, 'sáng'], [11, 20, 'trưa'],
   [12, 0, 'trưa'], [1, 30, 'chiều'], [2, 15, 'chiều'], [3, 0, 'chiều'], [4, 40, 'chiều'], [5, 30, 'chiều'], [7, 0, 'tối'], [7, 30, 'tối'],
   [8, 45, 'tối'], [9, 10, 'tối'], [10, 0, 'tối'], [11, 30, 'đêm']].forEach(([h, m, part]) => {
    const vi = `${viNum(h)} giờ${m === 30 ? ' rưỡi' : m ? ' ' + viNum(m) + ' phút' : ''} ${part}`;
    const en = { 'sáng': 'am', 'trưa': 'noon', 'chiều': 'pm', 'tối': 'pm', 'đêm': 'pm' }[part];
    items.push({ kind: 'time', show: `${h}:${String(m).padStart(2, '0')} ${part === 'trưa' && h === 12 && !m ? 'noon' : en}`, answer: `${h}:${String(m).padStart(2, '0')}`, vi });
  });
  ['0903 145 278', '0918 602 335', '0937 480 916', '0868 213 754', '0789 365 102', '0702 994 618', '0909 571 283', '0386 140 597',
   '0964 828 031', '0333 706 459'].forEach(p => {
    const vi = p.split(' ').map(g => g.split('').map(d => VI_DIGITS[+d]).join(' ')).join(', ');
    items.push({ kind: 'phone', show: p, answer: p.replace(/\s/g, ''), vi });
  });
  return items;
})();

/* Sentence builder pool: short sentences from patterns and dialogues */
const VI_BUILD_POOL = (() => {
  const out = [];
  VI_GRAMMAR.forEach(g => g.ex.forEach(([vi, en]) => out.push({ vi, en })));
  VI_DIALOGUES.filter(d => !d.private).forEach(d => d.lines.forEach(([, vi, en]) => { if (!/[.!?]/.test(vi.slice(0, -1))) out.push({ vi, en }); }));
  return out.filter(s => { const n = s.vi.split(/\s+/).length; return n >= 3 && n <= 9; });
})();

/* ===================== Tranche 7: the basics ===================== */

/* Alphabet: [letter, letter name, phonics sound used when spelling/teaching, example, meaning] */
const VI_ALPHABET = [
  ['A a', 'a', 'a', 'ba', 'three'], ['Ă ă', 'á', 'á', 'ăn', 'eat'], ['Â â', 'ớ', 'ớ', 'cần', 'need'],
  ['B b', 'bê', 'bờ', 'bạn', 'friend'], ['C c', 'xê', 'cờ', 'cá', 'fish'], ['D d', 'dê', 'dờ', 'da', 'skin'],
  ['Đ đ', 'đê', 'đờ', 'đi', 'go'], ['E e', 'e', 'e', 'em', 'younger sibling'], ['Ê ê', 'ê', 'ê', 'đêm', 'night'],
  ['G g', 'giê', 'gờ', 'gà', 'chicken'], ['H h', 'hát', 'hờ', 'hai', 'two'], ['I i', 'i ngắn', 'i', 'đi', 'go'],
  ['K k', 'ca', 'cờ', 'kem', 'ice cream'], ['L l', 'e-lờ', 'lờ', 'lá', 'leaf'], ['M m', 'em-mờ', 'mờ', 'má', 'mom'],
  ['N n', 'en-nờ', 'nờ', 'nói', 'speak'], ['O o', 'o', 'o', 'to', 'big'], ['Ô ô', 'ô', 'ô', 'cô', 'aunt; Miss'],
  ['Ơ ơ', 'ơ', 'ơ', 'chợ', 'market'], ['P p', 'pê', 'pờ', 'pin', 'battery'], ['Q q', 'quy', 'quờ', 'quận', 'district'],
  ['R r', 'e-rờ', 'rờ', 'rau', 'vegetables'], ['S s', 'ét-xì', 'sờ', 'sáu', 'six'], ['T t', 'tê', 'tờ', 'tám', 'eight'],
  ['U u', 'u', 'u', 'ngủ', 'sleep'], ['Ư ư', 'ư', 'ư', 'thư', 'letter (mail)'], ['V v', 'vê', 'vờ', 'về', 'return'],
  ['X x', 'ích-xì', 'xờ', 'xe', 'vehicle'], ['Y y', 'i dài', 'i', 'ly', 'glass']
];

/* Initial consonants: [spelling, Saigon sound (English hint), Hanoi sound if different, example, meaning, note] */
const VI_CONSONANTS = [
  ['b', 'b, with a slight gulp', '', 'ba', 'three', ''],
  ['c · k · q', 'k, without a puff of air', '', 'cá', 'fish', 'k before i, e, ê, y; q always comes as qu'],
  ['qu', 'w', 'kw', 'quá', 'very', 'Saigon: quá sounds like "wá"'],
  ['ch', 'ch, softer, tongue flat', '', 'chợ', 'market', ''],
  ['tr', 'tr, tongue curled back', 'same as ch', 'trà', 'tea', 'Saigon keeps tr and ch apart'],
  ['d', 'y as in "yes"', 'z', 'da', 'skin', ''],
  ['gi', 'y as in "yes"', 'z', 'gì', 'what', ''],
  ['đ', 'd, with a slight gulp', '', 'đi', 'go', ''],
  ['g · gh', 'soft, throaty g', '', 'gà', 'chicken', 'gh before i, e, ê: ghế (chair)'],
  ['h', 'h', '', 'hai', 'two', ''],
  ['kh', 'throaty kh, like German "Bach"', '', 'khách', 'guest', ''],
  ['l', 'l', '', 'lá', 'leaf', ''],
  ['m', 'm', '', 'mua', 'buy', ''],
  ['n', 'n', '', 'nói', 'speak', ''],
  ['ng · ngh', 'ng as in "sing", at the start', '', 'ngủ', 'sleep', 'ngh before i, e, ê: nghe (listen)'],
  ['nh', 'ny, like Spanish ñ', '', 'nhà', 'house', ''],
  ['ph', 'f', '', 'phở', 'phở', ''],
  ['r', 'English-style r', 'z', 'rau', 'vegetables', 'Many Southerners say a light r or g-like sound'],
  ['s', 's (often like sh)', 's', 'sáu', 'six', ''],
  ['x', 's', '', 'xe', 'vehicle', 'In casual Saigon speech s and x often sound the same'],
  ['t', 't, without a puff of air', '', 'tám', 'eight', ''],
  ['th', 't with a puff of air', '', 'thư', 'letter (mail)', ''],
  ['v', 'y (casual) or v', 'v', 'về', 'return', 'Saigon: về often sounds like "yề"']
];

/* Final sounds: [spelling, Saigon sound, example, meaning] */
const VI_FINALS = [
  ['-m', 'm', 'cơm', 'rice'], ['-p', 'p, not released', 'đẹp', 'beautiful'],
  ['-n', 'ng after most vowels', 'bạn', 'friend'], ['-ng', 'ng', 'sông', 'river'],
  ['-nh', 'n', 'anh', 'older brother'], ['-t', 'k, not released', 'tốt', 'good'],
  ['-c', 'k, not released', 'học', 'study'], ['-ch', 't, not released', 'sạch', 'clean'],
  ['-i · -y', 'ee glide', 'hai', 'two'], ['-o · -u', 'oo glide', 'sau', 'after']
];

/* Vowels: [spelling, English hint, example, meaning] */
const VI_VOWELS = [
  ['a', 'long "a" as in "father"', 'ba', 'three'],
  ['ă', 'short, clipped "a"', 'ăn', 'eat'],
  ['â', 'short "uh" as in "but"', 'cần', 'need'],
  ['e', '"e" as in "bed", mouth open', 'em', 'younger sibling'],
  ['ê', '"ay" as in "say", no glide', 'đêm', 'night'],
  ['i · y', '"ee" as in "see"', 'đi', 'go'],
  ['o', '"aw" as in "law"', 'to', 'big'],
  ['ô', '"o" as in "go", no glide', 'cô', 'aunt; Miss'],
  ['ơ', 'long "uh", like "er" without the r', 'ơi', 'hey!'],
  ['u', '"oo" as in "food"', 'ngủ', 'sleep'],
  ['ư', '"oo" with lips spread in a smile', 'thư', 'letter (mail)']
];
const VI_DIPHTHONGS = [
  ['ia · iê', '"ee" sliding to "uh"', 'bia', 'beer'], ['ua · uô', '"oo" sliding to "uh"', 'mua', 'buy'],
  ['ưa · ươ', '"ư" sliding to "uh"', 'mưa', 'rain'], ['ai', '"eye"', 'ai', 'who'],
  ['ao', '"ow" as in "how", long', 'cao', 'tall'], ['au', 'short "ow"', 'sau', 'after'],
  ['ay', 'short "eye"', 'tay', 'hand'], ['âu', '"oh", short', 'đâu', 'where'],
  ['ây', '"ay" as in "day", short', 'đây', 'here'], ['oi', '"oy" as in "boy"', 'nói', 'speak'],
  ['ôi', '"o" + "ee"', 'tôi', 'I'], ['ơi', '"uh" + "ee"', 'ơi', 'hey!'],
  ['ui', '"oo-ee"', 'vui', 'happy'], ['eo', '"e" + "oo"', 'kẹo', 'candy'],
  ['oa', '"wa"', 'hoa', 'flower'], ['uy', '"wee"', 'thủy', 'water (Sino)']
];

/* Numbers reference */
const VI_COUNT = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 20, 21, 24, 25, 30, 55, 100, 101, 1000, 10000, 100000, 1000000]
  .map(n => ({ n, vi: viNum(n) }));
const VI_ORDINALS = [['1st', 'thứ nhất'], ['2nd', 'thứ hai'], ['3rd', 'thứ ba'], ['4th', 'thứ tư'], ['5th', 'thứ năm'], ['10th', 'thứ mười']];

/* Calendar */
const VI_WEEKDAYS = [['Monday', 'thứ hai', 'T2'], ['Tuesday', 'thứ ba', 'T3'], ['Wednesday', 'thứ tư', 'T4'], ['Thursday', 'thứ năm', 'T5'],
  ['Friday', 'thứ sáu', 'T6'], ['Saturday', 'thứ bảy', 'T7'], ['Sunday', 'chủ nhật', 'CN']];
const VI_MONTHS = ['tháng một', 'tháng hai', 'tháng ba', 'tháng tư', 'tháng năm', 'tháng sáu', 'tháng bảy', 'tháng tám', 'tháng chín', 'tháng mười', 'tháng mười một', 'tháng mười hai'];
const VI_MONTH_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const VI_TIME_WORDS = [['day', 'ngày'], ['week', 'tuần'], ['month', 'tháng'], ['year', 'năm'], ['today', 'hôm nay'], ['yesterday', 'hôm qua'],
  ['tomorrow', 'ngày mai'], ['solar calendar', 'dương lịch'], ['lunar calendar', 'âm lịch'], ['birthday', 'sinh nhật'],
  ['spring', 'mùa xuân'], ['summer', 'mùa hè'], ['autumn', 'mùa thu'], ['winter', 'mùa đông'], ['rainy season', 'mùa mưa'], ['dry season', 'mùa khô']];
const VI_LUNAR_DAYS = [['1st of the lunar month', 'mùng một'], ['10th of the lunar month', 'mùng mười'], ['15th (full moon)', 'rằm'], ['Lunar New Year', 'Tết']];
const VI_ZODIAC = [
  ['子', 'Tý', 'con chuột', 'rat', 2020], ['丑', 'Sửu', 'con trâu', 'buffalo', 2021], ['寅', 'Dần', 'con cọp', 'tiger', 2022],
  ['卯', 'Mão', 'con mèo', 'cat (not rabbit!)', 2023], ['辰', 'Thìn', 'con rồng', 'dragon', 2024], ['巳', 'Tỵ', 'con rắn', 'snake', 2025],
  ['午', 'Ngọ', 'con ngựa', 'horse', 2026], ['未', 'Mùi', 'con dê', 'goat', 2027], ['申', 'Thân', 'con khỉ', 'monkey', 2028],
  ['酉', 'Dậu', 'con gà', 'rooster', 2029], ['戌', 'Tuất', 'con chó', 'dog', 2030], ['亥', 'Hợi', 'con heo', 'pig', 2031]
];
const VI_YEARS = [1990, 2000, 2010, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];

/* Date reader: built from short recorded pieces so any date can be spoken */
function viDatePieces(d) {
  const wd = (d.getDay() + 6) % 7;   // Monday = 0
  return ['hôm nay là ' + VI_WEEKDAYS[wd][1], 'ngày ' + viNum(d.getDate()), VI_MONTHS[d.getMonth()], 'năm ' + viNum(d.getFullYear())];
}
function viDateText(d) {
  const wd = (d.getDay() + 6) % 7;
  return `${VI_WEEKDAYS[wd][1]}, ngày ${viNum(d.getDate())} ${VI_MONTHS[d.getMonth()]} năm ${viNum(d.getFullYear())}`;
}
const VI_BASICS_PHRASES = (() => {
  const s = new Set();
  VI_ALPHABET.forEach(a => { s.add(a[1]); s.add(a[2]); s.add(a[3]); });
  VI_CONSONANTS.forEach(c => { s.add(c[3]); });
  ['ghế', 'nghe'].forEach(w => s.add(w));
  VI_FINALS.forEach(f => s.add(f[2]));
  VI_VOWELS.forEach(v => s.add(v[2]));
  VI_DIPHTHONGS.forEach(v => s.add(v[2]));
  VI_COUNT.forEach(c => s.add(c.vi));
  VI_ORDINALS.forEach(o => s.add(o[1]));
  VI_WEEKDAYS.forEach(w => { s.add(w[1]); s.add('hôm nay là ' + w[1]); });
  VI_MONTHS.forEach(m => s.add(m));
  VI_TIME_WORDS.forEach(t => s.add(t[1]));
  VI_LUNAR_DAYS.forEach(t => s.add(t[1]));
  VI_ZODIAC.forEach(z => { s.add('năm ' + z[1]); s.add(z[2]); });
  VI_YEARS.forEach(y => { s.add(viNum(y)); s.add('năm ' + viNum(y)); });
  for (let d = 1; d <= 31; d++) s.add('ngày ' + viNum(d));
  return [...s];
})();

/* Can Chi (sexagenary cycle): same system as Japanese 干支 */
const VI_CAN = [['甲', 'Giáp'], ['乙', 'Ất'], ['丙', 'Bính'], ['丁', 'Đinh'], ['戊', 'Mậu'], ['己', 'Kỷ'], ['庚', 'Canh'], ['辛', 'Tân'], ['壬', 'Nhâm'], ['癸', 'Quý']];
function viCanChi(y) {
  const c = VI_CAN[((y - 4) % 10 + 10) % 10], z = VI_ZODIAC[((y - 4) % 12 + 12) % 12];
  return { kanji: c[0] + z[0], name: c[1] + ' ' + z[1], animal: z[2], en: z[3] };
}
const VI_CANCHI_PHRASES = (() => {
  const s = new Set();
  for (let y = 1940; y <= 2040; y++) { s.add('năm ' + viNum(y)); s.add('năm ' + viCanChi(y).name); }
  return [...s];
})();

/* Tone names: [tone class, tone name, mark name used when spelling, English] */
const VI_TONE_NAMES = [
  ['ngang', 'thanh ngang', 'không dấu', 'level tone · no mark'],
  ['huyen', 'thanh huyền', 'dấu huyền', 'falling tone · grave accent'],
  ['sac', 'thanh sắc', 'dấu sắc', 'rising tone · acute accent'],
  ['hoinga', 'thanh hỏi', 'dấu hỏi', 'dipping tone · hook'],
  ['hoinga', 'thanh ngã', 'dấu ngã', 'dipping tone (South) · tilde'],
  ['nang', 'thanh nặng', 'dấu nặng', 'low tone · dot below']
];
