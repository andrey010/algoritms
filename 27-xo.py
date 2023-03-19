def xo(s):
    o = 0
    x = 0
    for i in s:
        if i.lower() == 'o': o += 1
        if i.lower() == 'x': x += 1
    return x == o