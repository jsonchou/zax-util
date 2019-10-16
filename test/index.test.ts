import { zaxString, zaxFunc, zaxArray, zaxObject, zaxRegex, zaxRegexForm, zaxTypes, zaxCases } from '../src/index'
import { log } from '../src/utils/index'

describe('zaxString', () => {
	let keys = Object.keys(zaxString)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxString).toHaveProperty(par)
			expect(zaxString[par]).toBeInstanceOf(Function)
		})
	})
})

describe('zaxFunc', () => {
	let keys = Object.keys(zaxFunc)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxFunc).toHaveProperty(par)
			expect(zaxFunc[par]).toBeInstanceOf(Function)
		})
	})
})

describe('zaxArray', () => {
	let keys = Object.keys(zaxArray)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxArray).toHaveProperty(par)
			expect(zaxArray[par]).toBeInstanceOf(Function)
		})
	})
})

describe('zaxObject', () => {
	let keys = Object.keys(zaxObject)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxObject).toHaveProperty(par)
			expect(zaxObject[par]).toBeInstanceOf(Function)
		})
	})
})

describe('zaxRegexForm', () => {
	let keys = Object.keys(zaxRegexForm)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxRegexForm).toHaveProperty(par)
			expect(zaxRegexForm[par]).toBeInstanceOf(Function)
		})
	})
})

describe('zaxTypes', () => {
	let keys = Object.keys(zaxTypes)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxTypes).toHaveProperty(par)
			expect(zaxTypes[par]).toBeInstanceOf(Function)
		})
	})
})


describe('zaxCases', () => {
	let keys = Object.keys(zaxCases)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxCases).toHaveProperty(par)
			expect(zaxCases[par]).toBeInstanceOf(Function)
		})
	})
})

describe('zaxRegex', () => {
	let keys = Object.keys(zaxRegex)
	keys.forEach(par => {
		it(`should have ${par} regex attribute`, () => {
			expect(zaxRegex).toHaveProperty(par)
		})
	})
})



describe('log', () => {
	it('should invoke success', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
	})

	it('should return a function', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
		expect(res).toBeInstanceOf(Function)

		let res2 = log()
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)
	})
})
