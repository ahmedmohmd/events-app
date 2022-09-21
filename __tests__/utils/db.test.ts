import * as helpers from "../../utils/db";
import * as fakeData from "../../utils/fakeData";
import type { Event, Comment } from "../../utils/types";

describe("Test Helpers Function", () => {
  describe("DB Helpers Functions For  Events", () => {
    it("It Should Return All Events", () => {
      expect(helpers.getAllData<Event>("fake-events")).toStrictEqual(
        fakeData.allFakeEvents
      );
    });

    it("It Should Return Single Event", () => {
      expect(helpers.getEvent("e3", "fake-events")).toStrictEqual(
        fakeData.singleFakeEvent
      );
    });

    it("It Should Return (Undefined) If Event Does't Exists", () => {
      expect(helpers.getEvent("e5", "fake-events")).toBeUndefined();
    });

    it("It Should Return Filtered Events", () => {
      expect(helpers.getFilteredEvents(2, 2020, "fake-events")).toStrictEqual(
        fakeData.filteredFakeEvents
      );
    });

    it("It Should Return Featured Events", () => {
      expect(helpers.getFeaturedEvents("fake-events")).toStrictEqual(
        fakeData.featuredEvents
      );
    });
  });

  describe("DB Helpers Functions For Comments", () => {
    it("It Should Return All Comments", () => {
      expect(helpers.getAllData<Comment>("fake-comments")).toStrictEqual(
        fakeData.allFakeComments
      );
    });

    it("It Should Return Filtered Comments", () => {
      expect(helpers.getFilteredComments("e2", "fake-comments")).toStrictEqual(
        fakeData.filteredFakeComments
      );
    });
  });
});
