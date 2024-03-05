import { v001, v002, v003, v1 } from "./version";

export const d1 : v1 = {
	Version : "1.0.0",
	UUID : "default",
	UpdatedAt : new Date(),
	Setting : {
		ron : "RON95",
		unit : "RM",
		preset : {
			1 : 10,
			2 : 30,
			3 : 50,
			4 : 100,
		}},
	Log : [],
	PriceData : [{
		date : "2024-01-01",
		ron95 : 2.05,
		ron97 : 3.47,
	}],
	Vehicle : [],
	Signature : process.env.NEXT_PUBLIC_SIGNATURE,

}
export const d003 : v003 = {
	Version : "0.0.3",
	UpdatedAt : new Date(),
	Setting : {
		ron : "RON95",
		unit : "RM",
		preset : {
			1 : 10,
			2 : 30,
			3 : 50,
			4 : 100,
		}},
	Log : [],
	PriceData : [{
		date : "2024-01-01",
		ron95 : 2.05,
		ron97 : 3.47,
	}],
	Vehicle : []
}

export const d001 : v001  = {
	Version : "0.0.1",
	Setting : {
		ron : "RON95",
		unit : "RM",
		preset : {
			1 : 10,
			2 : 30,
			3 : 50,
			4 : 100,
		}},
	Log : [],
	PriceData : [{
		UpdatedAt : "2024-01-01",
		RON95 : 2.05,
		RON97 : 3.47,
	}]
}

export const d002 : v002 = {
	Version : "0.0.2",
	UpdatedAt : new Date(),
	Setting : {
		ron : "RON95",
		unit : "RM",
		preset : {
			1 : 10,
			2 : 30,
			3 : 50,
			4 : 100,
		}},
	Log : [],
	PriceData : [{
		date : "2024-01-01",
		ron95 : 2.05,
		ron97 : 3.47,
	}],
	Vehicle : []
}
