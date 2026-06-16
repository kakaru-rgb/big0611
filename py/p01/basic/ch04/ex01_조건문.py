# 제어문
# 조건문
'''
if 조건식:
    수행문1
else
    수행문2

조건식은 결과가 True 또는 False 비교(> < >= <= == !=), 논리(and, or, not) 연산의 결과는 True 또는 False
'''

today_temp = 30
if today_temp > 0:
    print("아이스 아메리카노")

# today_temp = 30
# if today_temp > 0:
# print("아이스 아메리카노")
#   File "c:\맹준영_본\git\big0611\py\p01\basic\ch04\ex01_조건문.py", line 15
#     print("아이스 아메리카노")
#     ^
# IndentationError: expected an indented block after 'if' statement on line 14

today_temp = -10
if today_temp > 0:
    print("아이스 아메리카노")
else:
    print("따듯한 아메리카노")

today_temp = 0
if today_temp > 0:
    print("아이스 아메리카노")
elif today_temp == 0:
    print("미지근한 아메리카노")
else:
    print("따듯한 아메리카노")


# 중첩 if
weather = '비'
today_temp = 30
if weather == '맑음':
    if today_temp > 0:
        print("아아")
    elif today_temp == 0:
        print("디아")
    else:
        print("핫아")
else:
    print("먹지마!")

# 복합 조건
# 영어 90점 이상, 수학 90점 이상: 용돈 인상
# 영어 80점 이하, 수학 80점 이하: 용돈 삭감
# 기타: 동결
math_score = 80
eng_score = 100
if eng_score >= 90 and math_score >= 90:
    print("YAY! 용돈 인상")
elif eng_score <= 80 and math_score <= 80:
    print("용돈 삭감 ㅠㅠ")
else:
    print("동결")

# and -> or
math_score = 80
eng_score = 100
if eng_score >= 90 or math_score >= 90:
    print("YAY! 용돈 인상")
elif eng_score <= 80 or math_score <= 80:
    print("용돈 삭감 ㅠㅠ")
else:
    print("동결")