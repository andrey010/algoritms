def DNA_strand(dna):
    items = {"T": "A", "A": "T", "C": "G", "G": "C"}
    res = ''
    for char in dna:
        res += items[char]
    return res