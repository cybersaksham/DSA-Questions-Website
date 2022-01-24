import pandas as pd
import json
import ids

final = json.load(open("final.json"))
final_ids = ids.questions
topic_ids = ids.topics

for item in final:
    item["questions"] = []

count = 0
topic_count = 0


def append_topics(x):
    if x["Topic"]:
        lst = {
            "topic": x["Topic"],
            "questions": []
        }
        final.append(lst)


def append_topic_id():
    global topic_count
    for item in final:
        item["id"] = topic_ids[topic_count]
        topic_count += 1


def get_final(x):
    global count
    if x["Topic"]:
        if x["Link"]:
            for item in final:
                if(item["topic"] == x["Topic"]):
                    lst = {
                        "id": final_ids[count],
                        "question": x["Problem"],
                        "link": x["Link"]
                    }
                    item["questions"].append(lst)
                    count += 1


if __name__ == '__main__':
    append_topic_id()
    final450 = pd.read_csv("Final450.csv")
    final450.dropna(inplace=True)
    # final450.apply(append_topics, axis=1)
    final450.apply(get_final, axis=1)
    json.dump(final, open("final.json", "w"))
