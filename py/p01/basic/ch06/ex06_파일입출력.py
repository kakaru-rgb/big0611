# 파일 입력
# 파일 모드
'''
r(read): 읽기 -> read()

w(write): 쓰기 -> write(), 덮어 씌운다.
a(append): 추가 -> write()
'''
f = open('abc1.txt', 'w')
# 파일 출력
# with 문: close() 자동 처리