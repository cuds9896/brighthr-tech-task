import { describe, expect, it } from "vitest";
import { sortArrayOnField } from "./sortArrayOnField";
import { mockData } from "../constants/mockData";

describe("sortArrayOnField", () => {
  it("sorts an array of objects in ascending order by name", () => {
    const sortedByNameAsc = sortArrayOnField(mockData, "name", "asc");
    expect(sortedByNameAsc[0].name).toBe("Cost centres");
    expect(sortedByNameAsc[1].name).toBe("Employee Handbook");
    expect(sortedByNameAsc[2].name).toBe("Expenses");
    expect(sortedByNameAsc[3].name).toBe("Misc");
    expect(sortedByNameAsc[4].name).toBe("Public Holiday policy");
  });

  it("sorts an array of objects in descending order by name", () => {
    const sortedByNameDesc = sortArrayOnField(mockData, "name", "desc");
    expect(sortedByNameDesc[0].name).toBe("Public Holiday policy");
    expect(sortedByNameDesc[1].name).toBe("Misc");
    expect(sortedByNameDesc[2].name).toBe("Expenses");
    expect(sortedByNameDesc[3].name).toBe("Employee Handbook");
    expect(sortedByNameDesc[4].name).toBe("Cost centres");
  });

  it("sorts an array of objects in ascending order by date added", () => {
    const sortedByDateAsc = sortArrayOnField(mockData, "added", "asc");
    expect(sortedByDateAsc[0].added).toBe(undefined);
    expect(sortedByDateAsc[1].added).toBe(undefined);
    expect(sortedByDateAsc[2].added).toBe("2016-08-12");
    expect(sortedByDateAsc[3].added).toBe("2016-12-06");
    expect(sortedByDateAsc[4].added).toBe("2017-01-06");
  });

  it("sorts an array of objects in descending order by date added", () => {
    const sortedByDateDesc = sortArrayOnField(mockData, "added", "desc");
    expect(sortedByDateDesc[0].added).toBe("2017-01-06");
    expect(sortedByDateDesc[1].added).toBe("2016-12-06");
    expect(sortedByDateDesc[2].added).toBe("2016-08-12");
    expect(sortedByDateDesc[3].added).toBe(undefined);
    expect(sortedByDateDesc[4].added).toBe(undefined);
  });
});
