"""
Groq API Key Test
Run: python test_api_key.py
"""
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(dotenv_path=Path(__file__).resolve().parent / ".env")

api_key = os.getenv("GROQ_API_KEY")
model   = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")

print("=" * 50)
print(f"  Model   : {model}")
print(f"  API Key : {api_key[:12]}...{api_key[-4:]}" if api_key else "  API Key : NOT SET")
print("=" * 50)

if not api_key:
    print("❌ GROQ_API_KEY not set!"); exit(1)

from groq import Groq
client = Groq(api_key=api_key)

print("\n⏳ Sending test message...")
response = client.chat.completions.create(
    model=model,
    messages=[{"role": "user", "content": "Say 'Groq is working!' and nothing else."}],
    max_tokens=20,
)
print(f"\n✅ SUCCESS! Reply: {response.choices[0].message.content.strip()}")

