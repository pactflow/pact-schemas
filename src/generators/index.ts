import { OneOf } from "../utils";
import { genV3, genV4 } from "./rules";

const $id = "#/definitions/generator";

export const generator = OneOf(genV3, { $id });

export const generatorV4 = OneOf([...genV3, ...genV4], { $id });
