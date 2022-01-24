import pandas as pd
import json
import ids

final = json.load(open("final.json"))
final_ids = ids.ids

for item in final:
    final[item] = []

count = 0


def get_final(x):
    global count
    if x["Topic"]:
        if x["Link"]:
            lst = {"id": final_ids[count], "question": x["Problem"], "link": x["Link"]}
            final[x["Topic"]].append(lst)
            count += 1


if __name__ == '__main__':
    final450 = pd.read_csv("Final450.csv")
    final450.dropna(inplace=True)
    final450.apply(get_final, axis=1)
    json.dump(final, open("final.json", "w"))
