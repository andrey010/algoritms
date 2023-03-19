def move_zeros(lst): 
  arr = []
  for num in lst: 
    if num == 0: 
        lst.remove(num)
        lst.append(0)
  return lst

# def move_zeros(array):
#   return sorted(array, key=lambda x: x == 0)

