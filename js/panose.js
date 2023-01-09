// PANOSE specs available at: https://monotype.github.io/panose/pan1.htm

function panoseString(panoseArray, asHTML){
	if (panoseArray == undefined) return "none";

	var strings = ["Type: ","","","","","","","","",""];
	switch (panoseArray[0]) {
		case 2:
			strings[0] += "latin text"
			strings[1] = "Serif: ";
			strings[2] = "Weight: ";
			strings[3] = "Proportion: ";
			strings[4] = "Contrast: ";
			strings[5] = "Stroke variation: ";
			strings[6] = "Arm Style: ";
			strings[7] = "Letterform: ";
			strings[8] = "Midline: ";
			strings[9] = "x-Height: ";
			switch(panoseArray[1]){ 	case 1: 	strings[1] += "any"; break;
										case 1: 	strings[1] += "No Fit"; break;
										case 2: 	strings[1] += "Cove"; break;
										case 3: 	strings[1] += "Obtuse Cove"; break;
										case 4: 	strings[1] += "Square Cove"; break;
										case 5: 	strings[1] += "Obtuse Square Cove"; break;
										case 6: 	strings[1] += "Square"; break;
										case 7: 	strings[1] += "Thin"; break;
										case 8: 	strings[1] += "Oval"; break;
										case 9: 	strings[1] += "Exaggerated"; break;
										case 10: 	strings[1] += "Triangle"; break;
										case 11: 	strings[1] += "Normal Sans"; break;
										case 12: 	strings[1] += "Obtuse Sans"; break;
										case 13: 	strings[1] += "Perpendicular Sans"; break;
										case 14: 	strings[1] += "Flared"; break;
										case 15: 	strings[1] += "Rounded"; break;
										default: break; }
			switch(panoseArray[2]){ 	case 0: 	strings[2] += "Any"; break;
										case 1: 	strings[2] += "No Fit"; break;
										case 2: 	strings[2] += "Very Light"; break;
										case 3: 	strings[2] += "Light"; break;
										case 4: 	strings[2] += "Thin"; break;
										case 5: 	strings[2] += "Book"; break;
										case 6: 	strings[2] += "Medium"; break;
										case 7: 	strings[2] += "Demi"; break;
										case 8: 	strings[2] += "Bold"; break;
										case 9: 	strings[2] += "Heavy"; break;
										case 10: 	strings[2] += "Black"; break;
										case 11: 	strings[2] += "Extra Black"; break;
										default: break; }
			switch(panoseArray[3]){ 	case 0: 	strings[3] += "Any"; break;
										case 1: 	strings[3] += "No fit"; break;
										case 2: 	strings[3] += "Old Style"; break;
										case 3: 	strings[3] += "Modern"; break;
										case 4: 	strings[3] += "Even Width"; break;
										case 5: 	strings[3] += "Extended"; break;
										case 6: 	strings[3] += "Condensed"; break;
										case 7: 	strings[3] += "Very Extended"; break;
										case 8: 	strings[3] += "Very Condensed"; break;
										case 9: 	strings[3] += "Monospaced"; break;
										default: break; }
			switch(panoseArray[4]){ 	case 0: 	strings[4] += "Any"; break;
										case 1: 	strings[4] += "No Fit"; break;
										case 2: 	strings[4] += "None"; break;
										case 3: 	strings[4] += "Very Low"; break;
										case 4: 	strings[4] += "Low"; break;
										case 5: 	strings[4] += "Medium Low"; break;
										case 6: 	strings[4] += "Medium"; break;
										case 7: 	strings[4] += "Medium High"; break;
										case 8: 	strings[4] += "High"; break;
										case 9: 	strings[4] += "Very High"; break;
										default: break; }
			switch(panoseArray[5]){ 	case 0: 	strings[5] += "Any"; break;
										case 1: 	strings[5] += "No Fit"; break;
										case 2: 	strings[5] += "No Variation"; break;
										case 3: 	strings[5] += "Gradual/Diagonal"; break;
										case 4: 	strings[5] += "Gradual/Transitional"; break;
										case 5: 	strings[5] += "Gradual/Vertical"; break;
										case 6: 	strings[5] += "Gradual/Horizontal"; break;
										case 7: 	strings[5] += "Rapid/Vertical"; break;
										case 8: 	strings[5] += "Rapid/Horizontal"; break;
										case 9: 	strings[5] += "Instant/Vertical"; break;
										case 10: 	strings[5] += "Instant/Horizontal"; break;
										default: break; }
			switch(panoseArray[6]){ 	case 0: 	strings[6] += "Any"; break;
										case 1: 	strings[6] += "No Fit"; break;
										case 2: 	strings[6] += "Straight Arms/Horizontal"; break;
										case 3: 	strings[6] += "Straight Arms/Wedge"; break;
										case 4: 	strings[6] += "Straight Arms/Vertical"; break;
										case 5: 	strings[6] += "Straight Arms/Single Serif"; break;
										case 6: 	strings[6] += "Straight Arms/Double Serif"; break;
										case 7: 	strings[6] += "Non-Straight/Horizontal"; break;
										case 8: 	strings[6] += "Non-Straight/Wedge"; break;
										case 9: 	strings[6] += "Non-Straight/Vertical"; break;
										case 10: 	strings[6] += "Non-Straight/Single Serif"; break;
										case 11: 	strings[6] += "Non-Straight/Double Serif"; break;
										default: break; }
			switch(panoseArray[7]){ 	case 0: 	strings[7] += "Any"; break;
										case 1: 	strings[7] += "No Fit"; break;
										case 2: 	strings[7] += "Normal/Contact"; break;
										case 3: 	strings[7] += "Normal/Weighted"; break;
										case 4: 	strings[7] += "Normal/Boxed"; break;
										case 5: 	strings[7] += "Normal/Flattened"; break;
										case 6: 	strings[7] += "Normal/Rounded"; break;
										case 7: 	strings[7] += "Normal/Off Center"; break;
										case 8: 	strings[7] += "Normal/Square"; break;
										case 9: 	strings[7] += "Oblique/Contact"; break;
										case 10: 	strings[7] += "Oblique/Weighted"; break;
										case 11: 	strings[7] += "Oblique/Boxed"; break;
										case 12: 	strings[7] += "Oblique/Flattened"; break;
										case 13: 	strings[7] += "Oblique/Rounded"; break;
										case 14: 	strings[7] += "Oblique/Off Center"; break;
										case 15: 	strings[7] += "Oblique/Square"; break;
										default: break; }
			switch(panoseArray[8]){ 	case 0: 	strings[8] += "Any"; break;
										case 1: 	strings[8] += "No Fit"; break;
										case 2: 	strings[8] += "Standard/Trimmed"; break;
										case 3: 	strings[8] += "Standard/Pointed"; break;
										case 4: 	strings[8] += "Standard/Serifed"; break;
										case 5: 	strings[8] += "High/Trimmed"; break;
										case 6: 	strings[8] += "High/Pointed"; break;
										case 7: 	strings[8] += "High/Serifed"; break;
										case 8: 	strings[8] += "Constant/Trimmed"; break;
										case 9: 	strings[8] += "Constant/Pointed"; break;
										case 10: 	strings[8] += "Constant/Serifed"; break;
										case 11: 	strings[8] += "Low/Trimmed"; break;
										case 12: 	strings[8] += "Low/Pointed"; break;
										case 13: 	strings[8] += "Low/Serifed"; break;
										default: break; }
			switch(panoseArray[9]){ 	case 0: 	strings[9] += "Any"; break;
										case 1: 	strings[9] += "No Fit"; break;
										case 2: 	strings[9] += "Constant/Small"; break;
										case 3: 	strings[9] += "Constant/Standard"; break;
										case 4: 	strings[9] += "Constant/Large"; break;
										case 5: 	strings[9] += "Ducking/Small"; break;
										case 6: 	strings[9] += "Ducking/Standard"; break;
										case 7: 	strings[9] += "Ducking/Large"; break;
										default: break; }
			break;
		case 3:
			strings[0] = "latin handwriting";
			strings[1] = "Tool Kind: ";
			strings[2] = "Weight: ";
			strings[3] = "Spacing: ";
			strings[4] = "Aspect Ratio: ";
			strings[5] = "Contrast: ";
			strings[6] = "Topology: ";
			strings[7] = "Form: ";
			strings[8] = "Finials: ";
			strings[9] = "X-ascent: ";
			
			switch(panoseArray[1]){ 	case 0: 	strings[1] += "Any"; break;
										case 1: 	strings[1] += "No Fit"; break;
										case 2: 	strings[1] += "Flat Nib"; break;
										case 3: 	strings[1] += "Pressure Point"; break;
										case 4: 	strings[1] += "Engraved"; break;
										case 5: 	strings[1] += "Ball (Round Cap)"; break;
										case 6: 	strings[1] += "Brush"; break;
										case 7: 	strings[1] += "Rough"; break;
										case 8: 	strings[1] += "Felt Pen/Brush Tip"; break;
										case 9: 	strings[1] += "Wild Brush - Drips a lot"; break;
										default: break;}
			switch(panoseArray[2]){ 	case 0: 	strings[2] += "Any"; break;
										case 1: 	strings[2] += "No Fit"; break;
										case 2: 	strings[2] += "Very Light"; break;
										case 3: 	strings[2] += "Light"; break;
										case 4: 	strings[2] += "Thin"; break;
										case 5: 	strings[2] += "Book"; break;
										case 6: 	strings[2] += "Medium"; break;
										case 7: 	strings[2] += "Demi"; break;
										case 8: 	strings[2] += "Bold"; break;
										case 9: 	strings[2] += "Heavy"; break;
										case 10: 	strings[2] += "-Black"; break;
										case 11: 	strings[2] += "-Extra Black (Nord)"; break;
										default: break;}
			switch(panoseArray[3]){ 	case 0: 	strings[3] += "Any"; break;
										case 1: 	strings[3] += "No fit"; break;
										case 2: 	strings[3] += "Proportional Spaced"; break;
										case 3: 	strings[3] += "Monospaced"; break;
										default: break;}
			switch(panoseArray[4]){ 	case 0: 	strings[4] += "Any"; break;
										case 1: 	strings[4] += "No Fit"; break;
										case 2: 	strings[4] += "Very Condensed"; break;
										case 3: 	strings[4] += "Condensed"; break;
										case 4: 	strings[4] += "Normal"; break;
										case 5: 	strings[4] += "Expanded"; break;
										case 6: 	strings[4] += "Very Expanded"; break;
										default: break;}
			switch(panoseArray[5]){ 	case 0: 	strings[5] += "Any"; break;
										case 1: 	strings[5] += "No Fit"; break;
										case 2: 	strings[5] += "None"; break;
										case 3: 	strings[5] += "Very Low"; break;
										case 4: 	strings[5] += "Low"; break;
										case 5: 	strings[5] += "Medium Low"; break;
										case 6: 	strings[5] += "Medium"; break;
										case 7: 	strings[5] += "Medium High"; break;
										case 8: 	strings[5] += "High"; break;
										case 9: 	strings[5] += "Very High"; break;
										default: break;}
			switch(panoseArray[6]){ 	case 0: 	strings[6] += "Any"; break;
										case 1: 	strings[6] += "No Fit"; break;
										case 2: 	strings[6] += "Roman Disconnected"; break;
										case 3: 	strings[6] += "Roman Trailing"; break;
										case 4: 	strings[6] += "Roman Connected"; break;
										case 5: 	strings[6] += "Cursive Disconnected"; break;
										case 6: 	strings[6] += "Cursive Trailing"; break;
										case 7: 	strings[6] += "Cursive Connected"; break;
										case 8: 	strings[6] += "Blackletter Disconnected"; break;
										case 9: 	strings[6] += "Blackletter Trailing"; break;
										case 10: 	strings[6] += "-Blackletter Connected"; break;
										default: break;}
			switch(panoseArray[7]){ 	case 0: 	strings[7] += "Any"; break;
										case 1: 	strings[7] += "No Fit"; break;
										case 2: 	strings[7] += "Upright / No Wrapping"; break;
										case 3: 	strings[7] += "Upright / Some Wrapping"; break;
										case 4: 	strings[7] += "Upright / More Wrapping"; break;
										case 5: 	strings[7] += "Upright / Extreme Wrapping"; break;
										case 6: 	strings[7] += "Oblique / No Wrapping"; break;
										case 7: 	strings[7] += "Oblique / Some Wrapping"; break;
										case 8: 	strings[7] += "Oblique / More Wrapping"; break;
										case 9: 	strings[7] += "Oblique / Extreme Wrapping"; break;
										case 10: 	strings[7] += "Exaggerated / No Wrapping"; break;
										case 11: 	strings[7] += "Exaggerated / Some Wrapping"; break;
										case 12: 	strings[7] += "Exaggerated / More Wrapping"; break;
										case 13: 	strings[7] += "Exaggerated / Extreme Wrapping"; break;
										default: break;}
			switch(panoseArray[8]){ 	case 0: 	strings[8] += "Any"; break;
										case 1: 	strings[8] += "No Fit"; break;
										case 2: 	strings[8] += "None / No loops"; break;
										case 3: 	strings[8] += "None / Closed loops"; break;
										case 4: 	strings[8] += "None / Open loops"; break;
										case 5: 	strings[8] += "Sharp / No loops"; break;
										case 6: 	strings[8] += "Sharp / Closed loops"; break;
										case 7: 	strings[8] += "Sharp / Open loops"; break;
										case 8: 	strings[8] += "Tapered / No loops"; break;
										case 9: 	strings[8] += "Tapered / Closed loops"; break;
										case 10: 	strings[8] += "-Tapered / Open loops"; break;
										case 11: 	strings[8] += "-Round / No loops"; break;
										case 12: 	strings[8] += "-Round / Closed loops"; break;
										case 13: 	strings[8] += "-Round / Open loops"; break;
										default: break;}
			switch(panoseArray[9]){ 	case 0: 	strings[9] += "Any"; break;
										case 1: 	strings[9] += "No Fit"; break;
										case 2: 	strings[9] += "Very Low"; break;
										case 3: 	strings[9] += "Low"; break;
										case 4: 	strings[9] += "Medium"; break;
										case 5: 	strings[9] += "High"; break;
										case 6: 	strings[9] += "Very High"; break;
										default: break;}
			break;
		case 4:
			strings[0] += "latin decoratives: ";
			strings[1] = "Class: ";
			strings[2] = "Weight: ";
			strings[3] = "Aspect: ";
			strings[4] = "Contrast: ";
			strings[5] = "Serif Variant: ";
			strings[6] = "Treatment: ";
			strings[7] = "Lining: ";
			strings[8] = "Topology: ";
			strings[9] = "Range of Characters: ";
			
			switch(panoseArray[1]){ 	case 0:  	strings[1] += "Any"; break;
										case 1:  	strings[1] += "No Fit"; break;
										case 2:  	strings[1] += "Derivative"; break;
										case 3:  	strings[1] += "Non-standard Topology"; break;
										case 4:  	strings[1] += "Non-standard Elements"; break;
										case 5:  	strings[1] += "Non-standard Aspect"; break;
										case 6:  	strings[1] += "Initials"; break;
										case 7:  	strings[1] += "Cartoon"; break;
										case 8:  	strings[1] += "Picture Stems"; break;
										case 9:  	strings[1] += "Ornamented"; break;
										case 10:  	strings[1] += "Text and Background"; break;
										case 11:  	strings[1] += "Collage"; break;
										case 12:  	strings[1] += "Montage"; break;
										default: break;}
			switch(panoseArray[2]){ 	case 0:  	strings[2] += "Any"; break;
										case 1:  	strings[2] += "No Fit"; break;
										case 2:  	strings[2] += "Very Light"; break;
										case 3:  	strings[2] += "Light"; break;
										case 4:  	strings[2] += "Thin"; break;
										case 5:  	strings[2] += "Book"; break;
										case 6:  	strings[2] += "Medium"; break;
										case 7:  	strings[2] += "Demi"; break;
										case 8:  	strings[2] += "Bold"; break;
										case 9:  	strings[2] += "Heavy"; break;
										case 10:  	strings[2] += "Black"; break;
										case 11:  	strings[2] += "Extra Black"; break;
										default: break;}
			switch(panoseArray[3]){ 	case 0:  	strings[3] += "Any"; break;
										case 1:  	strings[3] += "No fit"; break;
										case 2:  	strings[3] += "Super Condensed"; break;
										case 3:  	strings[3] += "Very Condensed"; break;
										case 4:  	strings[3] += "Condensed"; break;
										case 5:  	strings[3] += "Normal"; break;
										case 6:  	strings[3] += "Extended"; break;
										case 7:  	strings[3] += "Very Extended"; break;
										case 8:  	strings[3] += "Super Extended"; break;
										case 9:  	strings[3] += "Monospaced"; break;
										default: break;}
			switch(panoseArray[4]){ 	case 0:  	strings[4] += "Any"; break;
										case 1:  	strings[4] += "No Fit"; break;
										case 2:  	strings[4] += "None"; break;
										case 3:  	strings[4] += "Very Low"; break;
										case 4:  	strings[4] += "Low"; break;
										case 5:  	strings[4] += "Medium Low"; break;
										case 6:  	strings[4] += "Medium"; break;
										case 7:  	strings[4] += "Medium High"; break;
										case 8:  	strings[4] += "High"; break;
										case 9:  	strings[4] += "Very High"; break;
										case 10:  	strings[4] += "Horizontal Low"; break;
										case 11:  	strings[4] += "Horizontal Medium"; break;
										case 12:  	strings[4] += "Horizontal High"; break;
										case 13:  	strings[4] += "Broken"; break;
										default: break;}
			switch(panoseArray[5]){ 	case 0:  	strings[5] += "Any"; break;
										case 1:  	strings[5] += "No Fit"; break;
										case 2:  	strings[5] += "Cove"; break;
										case 3:  	strings[5] += "Obtuse Cove"; break;
										case 4:  	strings[5] += "Square Cove"; break;
										case 5:  	strings[5] += "Obtuse Square Cove"; break;
										case 6:  	strings[5] += "Square"; break;
										case 7:  	strings[5] += "Thin"; break;
										case 8:  	strings[5] += "Oval"; break;
										case 9:  	strings[5] += "Exaggerated"; break;
										case 10:  	strings[5] += "Triangle"; break;
										case 11:  	strings[5] += "Normal Sans"; break;
										case 12:  	strings[5] += "Obtuse Sans"; break;
										case 13:  	strings[5] += "Perpendicular Sans"; break;
										case 14:  	strings[5] += "Flared"; break;
										case 15:  	strings[5] += "Rounded"; break;
										case 16:  	strings[5] += "Script"; break;
										default: break;}
			switch(panoseArray[6]){ 	case 0:  	strings[6] += "Any"; break;
										case 1:  	strings[6] += "No Fit"; break;
										case 2:  	strings[6] += "None - Standard Solid Fill"; break;
										case 3:  	strings[6] += "White / No Fill"; break;
										case 4:  	strings[6] += "Patterned Fill"; break;
										case 5:  	strings[6] += "Complex Fill"; break;
										case 6:  	strings[6] += "Shaped Fill"; break;
										case 7:  	strings[6] += "Drawn / Distressed"; break;
										default: break;}
			switch(panoseArray[7]){ 	case 0:  	strings[7] += "Any"; break;
										case 1:  	strings[7] += "No Fit"; break;
										case 2:  	strings[7] += "None"; break;
										case 3:  	strings[7] += "Inline"; break;
										case 4:  	strings[7] += "Outline"; break;
										case 5:  	strings[7] += "Engraved (Multiple Lines)"; break;
										case 6:  	strings[7] += "Shadow"; break;
										case 7:  	strings[7] += "Relief"; break;
										case 8:  	strings[7] += "Backdrop"; break;
										default: break;}
			switch(panoseArray[8]){ 	case 0:  	strings[8] += "Any"; break;
										case 1:  	strings[8] += "No Fit"; break;
										case 2:  	strings[8] += "Standard"; break;
										case 3:  	strings[8] += "Square"; break;
										case 4:  	strings[8] += "Multiple Segment"; break;
										case 5:  	strings[8] += "Deco (E,M,S) Waco midlines"; break;
										case 6:  	strings[8] += "Uneven Weighting"; break;
										case 7:  	strings[8] += "Diverse Arms"; break;
										case 8:  	strings[8] += "Diverse Forms"; break;
										case 9:  	strings[8] += "Lombardic Forms"; break;
										case 10:  	strings[8] += "Upper Case in Lower Case"; break;
										case 11:  	strings[8] += "Implied Topology"; break;
										case 12:  	strings[8] += "Horseshoe E and A"; break;
										case 13:  	strings[8] += "Cursive"; break;
										case 14:  	strings[8] += "Blackletter"; break;
										case 15:  	strings[8] += "Swash Variance"; break;
										default: break;}
			switch(panoseArray[9]){ 	case 0:  	strings[9] += "Any"; break;
										case 1:  	strings[9] += "No Fit"; break;
										case 2:  	strings[9] += "Extended Collection"; break;
										case 3:  	strings[9] += "Litterals"; break;
										case 4:  	strings[9] += "No Lower Case"; break;
										case 5:  	strings[9] += "Small Caps"; break;
										default: break;}
			break;
		case 5:
			strings[0] += "latin symbols";
			strings[1] = "Kind: ";
			strings[2] = "Weight: ";
			strings[3] = "Spacing: ";
			strings[4] = "Aspect Ratio & Contrast: ";
			strings[5] = "Aspect Ratio of Character 94: ";
			strings[6] = "Aspect Ratio of Character 119: ";
			strings[7] = "Aspect Ratio of Character 157: ";
			strings[8] = "Aspect Ratio of Character 163: ";
			strings[9] = "Aspect Ratio of Character 211: ";
			switch(panoseArray[1]){ 	case 0: 	strings[1] += "Any"; break;
										case 1: 	strings[1] += "No Fit"; break;
										case 2: 	strings[1] += "Montages"; break;
										case 3: 	strings[1] += "Pictures"; break;
										case 4: 	strings[1] += "Shapes"; break;
										case 5: 	strings[1] += "Scientific"; break;
										case 6: 	strings[1] += "Music"; break;
										case 7: 	strings[1] += "Expert"; break;
										case 8: 	strings[1] += "Patterns"; break;
										case 9: 	strings[1] += "Boarders"; break;
										case 10: 	strings[1] += "Icons"; break;
										case 11: 	strings[1] += "Logos"; break;
										case 12: 	strings[1] += "Industry specific"; break;
										default: break;}
			switch(panoseArray[2]){ 	case 1: 	strings[2] += "No Fit "; break;
										default: break;}
			switch(panoseArray[3]){ 	case 0: 	strings[3] += "Any"; break;
										case 1: 	strings[3] += "No fit"; break;
										case 2: 	strings[3] += "Proportional Spaced"; break;
										case 3: 	strings[3] += "Monospaced"; break;
										default: break;}
			switch(panoseArray[4]){ 	case 1: 	strings[4] += "No Fit "; break;
										default: break;}
			switch(panoseArray[5]){ 	case 0: 	strings[5] += "Any"; break;
										case 1: 	strings[5] += "No Fit"; break;
										case 2: 	strings[5] += "No Width"; break;
										case 3: 	strings[5] += "Exceptionally Wide"; break;
										case 4: 	strings[5] += "Super Wide"; break;
										case 5: 	strings[5] += "Very Wide"; break;
										case 6: 	strings[5] += "Wide"; break;
										case 7: 	strings[5] += "Normal"; break;
										case 8: 	strings[5] += "Narrow"; break;
										case 9: 	strings[5] += "Very Narrow"; break;
										default: break;}
			switch(panoseArray[6]){ 	case 0: 	strings[6] += "Any"; break;
										case 1: 	strings[6] += "No Fit"; break;
										case 2: 	strings[6] += "No Width"; break;
										case 3: 	strings[6] += "Exceptionally Wide"; break;
										case 4: 	strings[6] += "Super Wide"; break;
										case 5: 	strings[6] += "Very Wide"; break;
										case 6: 	strings[6] += "Wide"; break;
										case 7: 	strings[6] += "Normal"; break;
										case 8: 	strings[6] += "Narrow"; break;
										case 9: 	strings[6] += "Very Narrow"; break;
										default: break;}
			switch(panoseArray[7]){ 	case 0: 	strings[7] += "Any"; break;
										case 1: 	strings[7] += "No Fit"; break;
										case 2: 	strings[7] += "No Width"; break;
										case 3: 	strings[7] += "Exceptionally Wide"; break;
										case 4: 	strings[7] += "Super Wide"; break;
										case 5: 	strings[7] += "Very Wide"; break;
										case 6: 	strings[7] += "Wide"; break;
										case 7: 	strings[7] += "Normal"; break;
										case 8: 	strings[7] += "Narrow"; break;
										case 9: 	strings[7] += "Very Narrow"; break;
										default: break;}
			switch(panoseArray[8]){ 	case 0: 	strings[8] += "Any"; break;
										case 1: 	strings[8] += "No Fit"; break;
										case 2: 	strings[8] += "No Width"; break;
										case 3: 	strings[8] += "Exceptionally Wide"; break;
										case 4: 	strings[8] += "Super Wide"; break;
										case 5: 	strings[8] += "Very Wide"; break;
										case 6: 	strings[8] += "Wide"; break;
										case 7: 	strings[8] += "Normal"; break;
										case 8: 	strings[8] += "Narrow"; break;
										case 9: 	strings[8] += "Very Narrow"; break;
										default: break;}
			switch(panoseArray[9]){ 	case 0: 	strings[9] += "Any"; break;
										case 1: 	strings[9] += "No Fit"; break;
										case 2: 	strings[9] += "No Width"; break;
										case 3: 	strings[9] += "Exceptionally Wide"; break;
										case 4: 	strings[9] += "Super Wide"; break;
										case 5: 	strings[9] += "Very Wide"; break;
										case 6: 	strings[9] += "Wide"; break;
										case 7: 	strings[9] += "Normal"; break;
										case 8: 	strings[9] += "Narrow"; break;
										case 9: 	strings[9] += "Very Narrow"; break;
										default: break;}
			break;
	
		default:
			strings[0] = `unrecognized (${panoseArray[0]})`;
			break;
	}

    let finalstring = "";
    for(let i = 0; i < strings.length; i++){
        finalstring +=strings[i];

        if (asHTML) finalstring += "<br>";
        else finalstring += ". ";
    }

	return finalstring;
}

function panoseToCSS(panose){
    let style = "normal";
    let weight = "normal";

    if (panose[2] > 1){
        weight = (panose[2] - 1) * 100;
    }
    
    switch(panose[0]){
        case 2:
            if (panose[7] > 8){
                style = "oblique";
            }
        break;
        case 3:
            if (panose[7] > 5){
                style = "oblique";
            }
            if (panose[7] > 9){
                style = "cursive";
            }
        break;
        default: break;
    }
    console.log(panose);
    console.log(`${style} ${weight}`);

    return `font-weight: ${weight}; font-style: ${style};`;
}

function fallbacks(){ }//Planned in the future;