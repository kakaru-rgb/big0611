# ctrl+alt+좌우방향키: 창 분할
# 세트(set)
fruit_set = {'사과', '바나나', '오렌지'}
print(fruit_set)
fruit_set = {'사과', '바나나', '오렌지', '사과', '바나나'}
print(fruit_set)
# 중복을 허락하지 않는다

# 선택(인덱싱 개념이x -> 순서가x)
# fruit_set[1]
#   File "c:\맹준영_본\git\big0611\py\p01\basic\ch02\ex04_세트.py", line 10, in <module>
#     fruit_set[1]
#     ~~~~~~~~~^^^
# TypeError: 'set' object is not subscriptable

# 세트 아이템 추가
fruit_set.add('키위')
print(fruit_set)

# 세트 확장
vegetable_set = {'당근', '토마토', '양파'}
fruit_set.update(vegetable_set)
print(fruit_set)

# 아이템 삭제
fruit_set.remove('양파')
print(fruit_set)

del fruit_set
# print(fruit_set)