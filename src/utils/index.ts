import { ObjectOptions, Type, TSchema } from "@sinclair/typebox";

// see also: https://github.com/sinclairzx81/typebox/issues/151
export function OneOf<T extends TSchema[]>(
  values: [...T],
  options: ObjectOptions = {}
) {
  return Type.Unsafe({ oneOf: values, ...options });
}

export function StringEnum<T extends string[]>(values: [...T]) {
  return Type.Unsafe<T[number]>({ type: "string", enum: values });
}
