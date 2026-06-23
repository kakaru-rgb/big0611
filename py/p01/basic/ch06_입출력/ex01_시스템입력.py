# 시스템 입력
# input
# print(input('입력:'))

# 사용자로부터 이름을 입력
'''
# 이름을 입력하세요: 홍길동
# '''
# name = input('이름을 입력하세요: ')
# print(name + "님, 안녕하세요")

# # 키에 따른 권장체중
# # 입력받은 input 값은 문자열이다.
# height = input("키를 입력하세요")
# weight = (height - 100) * 0.9
# print("권장 체중은 " + weight + "kg 입니다")

# 포멧스트링
'''
print(문자열.format(값))
print('메시지: {값}'.format(값))
'''
food = '피자'
text = '나는 {}를 먹고 싶다'
print(text.format(food))

print('나는 {}를 먹고 싶다'.format(food))

food1 = "피자"
food2 = "치킨"
text = "나는 {}, {}을 먹고 싶다"
print(text.format("피자", "치킨"))

print("나는 {0}, {1}을 먹고 싶다. 우리집엔 {1}이 배달되지 않아 슬프다.".format("피자", "치킨"))

# 인덱스 대신 변수이름으로
name = '홍길동'
money = 100
text = "나는 {name}이고, {money}원을 가지고 있다"
print(text.format(name = '홍길동', money = 100))

# 문자열에 %s를 작성하며, 치환할 문자를 지정
food = '치킨'
print('나는 %s을 먹고 싶다' % food)

# 소수점 둘째자리까지 표시
print("{:.2f}% 확신합니다.".format(95.1234567))

# 천 단위마다 ,
print('한 달 휴대폰 요금은 {:,}원입니다.'.format(100000))