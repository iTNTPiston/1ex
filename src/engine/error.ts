export type EngineError = 
    "GaleRecharge" |
    "GaleCount" |
    "FuryRecharge" |
    "FuryCount"

export const EngineErrorStrings = {
	"GaleRecharge": "Gale might not be back",
	"GaleCount": "Not enough gale",
	"FuryRecharge": "Fury might not be back",
	"FuryCount": "Not enough fury"
};