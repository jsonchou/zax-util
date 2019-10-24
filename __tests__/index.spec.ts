import zaxString from '../src/string'
import zaxFunc from '../src/func'
import zaxArray from '../src/array'
import zaxObject from '../src/object'
import zaxRegex from '../src/regex'
import zaxRegexForm from '../src/regexForm'
import zaxTypes from '../src/types'
import zaxCases from '../src/cases'

import { log } from '../src/_utils/index'

const stdTypeList = [1, 'a', { a: 1 }, [1], console.log, new Date(), null, undefined, /\ /gi]

let waitObj = {
	k: 0
}

describe('zaxString', () => {
	let keys = Object.keys(zaxString)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxString).toHaveProperty(par)
			expect(zaxString[par]).toBeInstanceOf(Function)
		})
	})

	it(`should be isString type`, () => {
		expect(zaxString.isString('a')).toEqual(true)
		expect(zaxString.isString(1)).toEqual(false)
		expect(zaxString.isString({ a: 1 })).toEqual(false)
		expect(zaxString.isString([])).toEqual(false)
		expect(zaxString.isString(console.log)).toEqual(false)
		expect(zaxString.isString(new Date())).toEqual(false)
		expect(zaxString.isString(null)).toEqual(false)
		expect(zaxString.isString(undefined)).toEqual(false)
		expect(zaxString.isString(/\ /gi)).toEqual(false)
	})

	it(`should be ellipsis string`, () => {
		expect(zaxString.ellipsis('')).toEqual('')
		expect(zaxString.ellipsis('dd')).toEqual('dd')
		expect(zaxString.ellipsis('qwertyuiop', 5, '*', 3)).toEqual('qwert***')
		expect(zaxString.ellipsis('qwertyuiop', 5, '*')).toEqual('qwert***')
		expect(zaxString.ellipsis('qwertyuiop', 5)).toEqual('qwert...')
		expect(zaxString.ellipsis('qwertyuiop', 9)).toEqual('qwertyuio...')
		expect(zaxString.ellipsis('qwertyuiop', 10)).toEqual('qwertyuiop')
		expect(zaxString.ellipsis('qwertyuiop', 11)).toEqual('qwertyuiop')
		expect(zaxString.ellipsis('qwertyuiop', 5, '$', 5)).toEqual('qwert$$$$$')
		expect(zaxString.ellipsis('qwer', 5)).toEqual('qwer')
	})

	it(`should be toWord string`, () => {
		expect(zaxString.toWord(3)).toEqual('three')
		expect(zaxString.toWord(0)).toEqual('zero')
		expect(zaxString.toWord(10)).toEqual('ten')
		expect(zaxString.toWord(10, 'zh-cn')).toEqual('十')
	})

	it(`should be toDay string`, () => {
		expect(zaxString.toDay(3)).toEqual('三')
		expect(zaxString.toDay(0)).toEqual('日')
		expect(zaxString.toDay(0, 'en-us')).toEqual('sun')
	})

	it(`should be toMonth string`, () => {
		expect(zaxString.toMonth(3)).toEqual('三')
		expect(zaxString.toMonth(1)).toEqual('一')
		expect(zaxString.toMonth(10, 'en-us')).toEqual('oct')
	})

	it(`should be toWords string`, () => {
		expect(zaxString.toWord(3)).toEqual('three')
		expect(zaxString.toWord(0)).toEqual('zero')
		expect(zaxString.toWord(10)).toEqual('ten')
	})

	it(`should be lpad string`, () => {
		expect(zaxString.lpad(3, 3, 'x')).toEqual('xx3')
		expect(zaxString.lpad(3)).toEqual('03')
		expect(zaxString.lpad(30)).toEqual('30')
		expect(zaxString.lpad(2, 4)).toEqual('0002')
		expect(zaxString.lpad('d', 4)).toEqual('000d')
		expect(zaxString.lpad('d', 3, 'dax')).toEqual('daxdaxdaxd3')
	})

	it(`should be rpad string`, () => {
		expect(zaxString.rpad(3, 3, 'x')).toEqual('3xx')
		expect(zaxString.rpad(3)).toEqual('30')
		expect(zaxString.rpad(30)).toEqual('30')
		expect(zaxString.rpad(2, 4)).toEqual('2000')
		expect(zaxString.rpad('d', 4)).toEqual('d000')
		expect(zaxString.rpad('d', 3, 'dax')).toEqual('2ddaxdaxdax')

	})

	it(`should be striptags html`, () => {
		expect(zaxString.striptags('qwer<a>ddd</a>ty<strong>xxx</strong>uiop', ['a'])).toEqual('qwer<a>ddd</a>tyxxxuiop')
	})
})

describe('zaxFunc', () => {
	beforeEach(() => {
		setTimeout(() => {
			waitObj.k = 1
		}, 1000)
	})
	let keys = Object.keys(zaxFunc)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxFunc).toHaveProperty(par)
			expect(zaxFunc[par]).toBeInstanceOf(Function)
		})
	})

	it(`should be correct wait function`, () => {
		let res = zaxFunc.wait(waitObj, 'k')
		expect(res).toBeInstanceOf(Promise)
		res.then(info => {
			expect(info).toBeTruthy()
		})

		let res2 = zaxFunc.wait([], 'k')
		expect(res2).toBeInstanceOf(Promise)
		res2.then(info => {
			expect(info).toBeFalsy()
		}).catch(err => {
			console.error(err)
		})

		let res3 = zaxFunc.wait([], '')
		expect(res3).toBeInstanceOf(Promise)
		res3.then(info => {
			expect(info).toBeFalsy()
		}).catch(err => {
			console.error(err)
		})

		let res4 = zaxFunc.wait({}, 'k', 30)
		expect(res4).toBeInstanceOf(Promise)
		res4.then(info => {
			expect(info).toBeTruthy()
		}).catch(err => {
			console.error(err)
		})

		let res5 = zaxFunc.wait({}, 'k', 30, 3500)
		expect(res5).toBeInstanceOf(Promise)
		res5.then(info => {
			expect(info).toBeTruthy()
		}).catch(err => {
			console.error(err)
		})
	})

	it(`should be correct sleep function`, () => {
		let res = zaxFunc.sleep(3000)
		expect(res).toBeInstanceOf(Promise)
		res.then(info => {
			expect(info).toBeTruthy()
		}).catch(err => {
			console.error(err)
		})

		let res2 = zaxFunc.sleep()
		expect(res2).toBeInstanceOf(Promise)
		res2.then(info => {
			expect(info).toBeTruthy()
		}).catch(err => {
			console.error(err)
		})
	})

	it('should be correct output', async () => {
		let tmp = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
		let arr: string[] = []
		console.log(1)
		tmp.forEach(async (item, index) => {
			await zaxFunc.sleep(Math.floor(Math.random() * (index + 1) * 300))
			console.warn(item)
			arr.push(item)
		})
		console.log(2)
		expect(arr).toEqual([])
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

	it(`should be correct sort function result `, () => {
		expect(zaxArray.sort([])).toBeFalsy()
		expect(zaxArray.sort(['a', 'c', 'd', 'a'], 'ASC')).toEqual(['a', 'a', 'c', 'd'])
		expect(zaxArray.sort([1, 2, 9, 3, 4, 3, 2, 3, 4, 5, 3], 'ASC')).toEqual([1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 9])
		expect(zaxArray.sort(['a', 'c', 'd', 'a'], 'DESC')).toEqual(['d', 'c', 'a', 'a'])
		expect(zaxArray.sort([{ id: 2, v: 1 }, { id: 3, v: 4 }, { id: 1, v: 7 }], 'ASC', 'id')).toEqual([{ id: 1, v: 7 }, { id: 2, v: 1 }, { id: 3, v: 4 }])
		expect(zaxArray.sort([{ id: 2, v: 1 }, { id: 3, v: 4 }, { id: 1, v: 7 }], 'DESC', 'id')).toEqual([{ id: 3, v: 4 }, { id: 2, v: 1 }, { id: 1, v: 7 }])
	})

	it(`should be correct unique function result `, () => {
		expect(zaxArray.unique([])).toBeFalsy()
		expect(zaxArray.unique([], 'id')).toBeFalsy()
		expect(zaxArray.unique(['a', 'c', 'd', 'a'])).toEqual(['a', 'c', 'd'])
		expect(zaxArray.unique([{ id: 1, v: 'a' }, { id: 2, v: 'c' }, { id: 3, v: 'd' }, { id: 1, v: 'a' }])).toEqual([{ id: 1, v: 'a' }, { id: 2, v: 'c' }, { id: 3, v: 'd' }])
	})

	it(`should be correct union function result `, () => {
		expect(zaxArray.union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
		expect(zaxArray.union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
	})

	it(`should be correct diff function result `, () => {
		expect(zaxArray.diff(['a', 'b', 'c'], ['a'], ['b'], ['g'])).toEqual(['c'])
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

	it(`hasDiff`, () => {
		expect(zaxObject.hasDiff({ k: 1 }, { k: 2 })).toEqual(true)
		expect(zaxObject.hasDiff({ k: 1, v: 3 }, { k: 1, v: 3 })).toEqual(false)
		expect(zaxObject.hasDiff({ k: 1, arr: [1] }, { k: 1, arr: [1] })).toEqual(true)

		expect(zaxObject.hasDiff({ k: 1 }, { v: 1 })).toEqual(true)
		expect(zaxObject.hasDiff({ k: 1 }, { v: 1 })).toEqual(true)

		expect(() => {
			zaxObject.hasDiff([{ k: 1 }], [{ k: 2 }])
		}).toThrow(TypeError)

		expect(() => {
			zaxObject.hasDiff([{ k: 1 }], [{ k: 1 }])
		}).toThrow(TypeError)

		expect(() => {
			zaxObject.hasDiff([1], [2])
		}).toThrow(TypeError)

		expect(() => {
			zaxObject.hasDiff([1], [1])
		}).toThrow(TypeError)
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

	it(`should be correct isDate function result `, () => {
		expect(zaxRegexForm.isDate('2019-09-04')).toEqual(true)
		expect(zaxRegexForm.isDate('dd')).toEqual(false)
	})

	it(`should be correct isEmail function result `, () => {
		expect(zaxRegexForm.isEmail('d@d.d')).toEqual(true)
		expect(zaxRegexForm.isEmail('ddd')).toEqual(false)
	})

	it(`should be correct isIdcard function result `, () => {
		expect(zaxRegexForm.isIdcard('130324200106012652')).toEqual(true)
		expect(zaxRegexForm.isIdcard(130324200106012652)).toEqual(true)
	})

	it(`should be correct isMobile function result `, () => {
		expect(zaxRegexForm.isMobile(13402938476)).toEqual(true)
		expect(zaxRegexForm.isMobile('13402938476')).toEqual(true)
	})

	it(`should be correct isPhone function result `, () => {
		expect(zaxRegexForm.isPhone(13402938476)).toEqual(true)
		expect(zaxRegexForm.isPhone('13402938476')).toEqual(true)
	})

	it(`should be correct isQQ function result `, () => {
		expect(zaxRegexForm.isQQ(54645464)).toEqual(true)
		expect(zaxRegexForm.isQQ('54645464')).toEqual(true)
	})

	it(`should be correct isTel function result `, () => {
		expect(zaxRegexForm.isTel(87665432)).toEqual(true)
		expect(zaxRegexForm.isTel('87665432')).toEqual(true)
	})

	it(`should be correct matchRegex function result `, () => {
		expect(zaxRegexForm.matchRegex(87665432, 'QQ')).toEqual(true)
		expect(zaxRegexForm.matchRegex('87665432', 'QQ')).toEqual(true)
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
		it(`should input a string`, () => {
			expect(zaxCases[par]()).toBeFalsy()
		})
		it(`should return a string`, () => {
			expect(zaxCases[par]('std word')).toBeTruthy()
		})
	})

	it(`should be correct cleancase function result `, () => {
		expect(zaxCases.cleancase('_-qq-ww_ee.rr-_')).toEqual('qq-ww_ee.rr')
	})
	it(`should be correct camelcase function result `, () => {
		expect(zaxCases.camelcase(' qq-ww_ee.rr ')).toEqual('qqWwEeRr')
		expect(zaxCases.camelcase('foo bar baz')).toEqual('fooBarBaz')
		expect(zaxCases.camelcase('q')).toEqual('q')
	})
	it(`should be correct pascalcase function result `, () => {
		expect(zaxCases.pascalcase(' qq-ww_ee.rr ')).toEqual('QqWwEeRr')
		expect(zaxCases.pascalcase('foo bar baz')).toEqual('FooBarBaz')
		expect(zaxCases.camelcase(`set_server_${zaxCases.pascalcase('pageName')}`)).toEqual('setServerPageName')
		expect(zaxCases.camelcase(`set_${zaxCases.pascalcase('page_Name')}`)).toEqual('setPageName')
		expect(zaxCases.camelcase(`set_${zaxCases.pascalcase('page_name')}`)).toEqual('setPageName')
		expect(zaxCases.pascalcase('q')).toEqual('Q')
	})
	it(`should be correct snakecase function result `, () => {
		expect(zaxCases.snakecase(' qq-ww_ee.rr ')).toEqual('qq_ww_ee_rr')
		expect(zaxCases.snakecase('foo bar baz')).toEqual('foo_bar_baz')
		expect(zaxCases.snakecase('q')).toEqual('q')
	})
	it(`should be correct pathcase function result `, () => {
		expect(zaxCases.pathcase(' qq-ww_ee.rr ')).toEqual('qq/ww/ee/rr')
		expect(zaxCases.pathcase('foo bar baz')).toEqual('foo/bar/baz')
		expect(zaxCases.pathcase('q')).toEqual('q')
	})
	it(`should be correct sentencecase function result `, () => {
		expect(zaxCases.sentencecase('qq-ww_ee.rr')).toEqual('Qq-ww_ee.rr')
		expect(zaxCases.sentencecase('foo bar baz')).toEqual('Foo bar baz')
		expect(zaxCases.sentencecase('q')).toEqual('Q')
	})
	it(`should be correct dotcase function result `, () => {
		expect(zaxCases.dotcase(' qq-ww_ee.rr ')).toEqual('qq.ww.ee.rr')
		expect(zaxCases.dotcase('foo bar baz')).toEqual('foo.bar.baz')
		expect(zaxCases.dotcase('q')).toEqual('q')
	})
	it(`should be correct dashcase function result `, () => {
		expect(zaxCases.dashcase(' qq-ww_ee.rr ')).toEqual('qq-ww-ee-rr')
		expect(zaxCases.dashcase('foo bar baz')).toEqual('foo-bar-baz')
		expect(zaxCases.dashcase('q')).toEqual('q')
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

		let res2 = log('test', 'extra param')
		expect(log).toBeInstanceOf(Function)
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)

		let res3 = log()
		expect(res3).toBeTruthy()
		expect(res3).toBeInstanceOf(Function)
	})
})
