#encode:utf-8
import json
import wikipedia
import sys
wikipedia.set_lang("zh")
ny=wikipedia.summary(sys.argv)
print(ny)
