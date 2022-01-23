import pandas as pd
import json

final = json.load(open("final.json"))

for item in final:
    final[item] = []


def get_final(x):
    if x["Topic"]:
        if x["Link"]:
            lst = {"question": x["Problem"], "link": x["Link"]}
            final[x["Topic"]].append(lst)


if __name__ == '__main__':
    final450 = pd.read_csv("Final450.csv")
    final450.dropna(inplace=True)
    final450.apply(get_final, axis=1)
    json.dump(final, open("final.json", "w"))
