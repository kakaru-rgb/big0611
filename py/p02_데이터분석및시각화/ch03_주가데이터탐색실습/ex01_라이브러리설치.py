# 라이브러리 설치 및 데이터 로드
# pip install yfinance

# 라이브러리 임포트
import yfinance as yf
import pandas as pd

# df = yf.download('NVDA', start='2026-01-01', end='2026-12-31')
df = yf.download('NVDA', period='1y', interval='1d', multi_level_index=False)
print(df.head())

# 파이썬 프로그램 실행 방법
'''
1. *.py: F5 -> 터미널 실행
2. *.py: shift + Enter -> 인터프리터 실행
3. *.ipynb: shift + Enter -> 주피터 노트북 실행(월 단위 실행)
'''