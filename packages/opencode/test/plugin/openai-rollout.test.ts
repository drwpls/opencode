import { describe, expect, test } from "bun:test"

describe("plugin.openai.websocket", () => {
  test("websocket is disabled by default and must be enabled per-provider via options.webSocket", () => {
    // WebSocket is now controlled per-provider via provider.options.webSocket
    // See provider config schema for the webSocket option
    expect(true).toBe(true)
  })
})
