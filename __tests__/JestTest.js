import React from "react"
import renderer from "react-test-renderer"

import JestTest from "../src/components/JestTest"

describe("Header", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<JestTest />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})