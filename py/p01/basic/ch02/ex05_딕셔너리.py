#딕셔너리(dict)
'''
이름 = {
    '키': 값,
    'Key': value
    ...
}
'''
# 생성
my_dict = {
    "name":"헤리",
    "age": 27,
    "height": 190,
    "weight": 99.9
}
print(my_dict)

# 아이템 선택
print(my_dict.keys())
print(my_dict['age'])

# 수정(Update)
my_dict['age'] = 28
print(my_dict)

# 딕셔너리.update({키:값})
my_dict.update({'weight': 100})
print(my_dict)

# 추가
my_dict.update({'address':'Busan'})
print(my_dict)

# 삭제
my_dict.popitem()   # 마지막 아이템 삭제
print(my_dict)

my_dict.pop('age')  # 아이템 선택 삭제(나이 선택)
print(my_dict)

my_dict.clear() # 전부 삭제
print(my_dict)

del my_dict
# print(my_dict) *에러*