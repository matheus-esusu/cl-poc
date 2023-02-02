import { expect, test } from "@playwright/experimental-ct-react";
import { UseConstantComponentTest } from "./useConstant";

test("should not update the constat", async ({ mount }) => {
  const component = await mount(
    <UseConstantComponentTest constant="count_is_" />
  );

  await expect(component).not.toContainText("count_is_2");
  await expect(component).toContainText("count_is_0");
});
