import { DataType, Log, defaultData, v002, v003 } from "./version";

export function convertData (input : DataType["any"]) {

	if (input.Version == defaultData.latest.Version) {
		return input
	}

	try {
		switch (input.Version) {
			case "0.0.1" : {
				const draftData : DataType["0.0.2"] = {
					Version : "0.0.2",
					UpdatedAt : new Date(),
					Setting : input.Setting,
					Log : input.Log,
					PriceData : input.PriceData,
					Vehicle : []
				}
				return convertData(draftData)
			}
			case "0.0.2" : {
	
				const inputData : v002 = input
	
				const draftLog : { 
					id : string;
					timestamp : Date;
					odometer : number;
					trip : number;
					ron : string;
					price : {
						date : string;
						ron95 : number;
						ron97 : number;
					};
					amount : {
						unit : string;
						value : number;
					};
					consumption : number;
				}[] = []
	
				inputData.Log.forEach((log) => {
	
					var draftRon95 : number = 0
					var draftRon97 : number = 0
	
					if (log.ron == "RON95") {
						draftRon95 = log.price
					} else {
						draftRon97 = log.price
					}
	
					const draftLogEntry : Log = {
						id : log.id,
						timestamp : log.timestamp,
						odometer : log.odometer,
						trip : log.trip,
						ron : log.ron,
						price : {
							date : log.timestamp.toLocaleDateString("en-MY"),
							ron95 : draftRon95,
							ron97 : draftRon97
						},
						amount : {
							unit : "L",
							value : log.amountLitre
						},
						consumption : log.consumption
					}
					draftLog.push(draftLogEntry)
				})
	
				const draftData : DataType["0.0.3"] = {
					Version : "0.0.3",
					UpdatedAt : new Date(),
					Setting : input.Setting,
					Log : draftLog,
					PriceData : input.PriceData,
					Vehicle : []
				}
	
				return convertData(draftData)
			}
			default : {
				return null
			}
		}

	} catch (error) {
		return null
	}

}