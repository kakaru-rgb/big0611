# 나이 입력 및 검증 시스템
def get_valid_age():    
    while True:
        try:
            age_input = int(input('나이를 입력하세요: '))
            age = int(age_input)
            # TypeError: '<' not supported between instances of 'str' and 'int'
            # PS C:\maeng\git\big0611>
            #ValueError: invalid literal for int() with base 10: 'C:\\Users\\pc06-00\\AppData\\Local\\Programs\\Python\\Python311\\python.exe c:/maeng/git/big0611/py/p01/basic/ch10/ex02_예외처리.py'
            # PS C:\maeng\git\big0611> 300
            if age < 0:
                print('나이는 0 이상이어야 합니다')
                continue
            elif age > 150:
                print('유효하지 않은 나이입니다')
                continue
            else:
                return age
        except ValueError as e:
            print(f'숫자만 입력해 주세요: {e}')
        except KeyboardInterrupt:
            print('\n프로그램을 종료합니다.')
# 함수 호출
try:
    user_age = get_valid_age()
    if user_age:
        print(f'입력하신 나이는 {user_age}세입니다.')
except:
    print('예상치 못한 오류가 발생했습니다.')