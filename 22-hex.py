def toHex(n):
    if n < 0: return "00"
    if n > 255: return "FF"
    if len(hex(n)) == 1: return hex(n)
    else: return hex(n)

def rgb(r, g, b):
    return toHex(r) + toHex(g) + toHex(b)

print(rgb(255,0,0))