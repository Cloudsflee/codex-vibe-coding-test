import assert from "node:assert/strict";
import test from "node:test";
import { signal } from "../src/signal.mjs";

test("signal is exported", () => assert.equal(typeof signal, "string"));
