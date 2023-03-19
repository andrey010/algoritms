# const regex = /\(\)|\[\]|\{\}/;
# const validBraces = braces => regex.test(braces)
#   ? validBraces(braces.replace(regex, ''))
#   : '' === braces
import re
def valid_braces(string):
  return re.match("/\(\)|\[\]|\{\}/", string)

print(valid_braces("{}()[]"))