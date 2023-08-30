import { config } from "../../include/config.js";
import * as SettingsElement from "../elements/setting-element.js";
import * as SettingChangeInConfig from "./setting-change-config.js";
import * as SettingChangeInUI from "../ui/setting-change-ui.js";
import * as TypingAreaElements from "../elements/typing-area-element.js";
import { css } from "../../include/constants.js";
import { Test } from "../main.js";

// disable button
function disableButton(button) {
	button.id = "";
	button.style.cursor = "not-allowed";
	if ( !button.hasAttribute("disabled") ) {
		button.toggleAttribute("disabled");
	}
}

// enable button
function enableButton(button, selected = false) {
	if ( selected ) button.id = "selected";
	button.style.cursor = "pointer";
	if ( button.hasAttribute("disabled") ) {
		button.removeAttribute("disabled");
	}
}

TypingAreaElements.text.addEventListener("click", () => { TypingAreaElements.input.focus() });

// tape mode
SettingsElement.tapeModeConfig.off.addEventListener("click",         updateTapeModeConfig);
SettingsElement.tapeModeConfig.mode.letter.addEventListener("click", updateTapeModeConfig);
SettingsElement.tapeModeConfig.mode.word.addEventListener("click",   updateTapeModeConfig);

// text input field
SettingsElement.textInputFieldConfig.hidden.addEventListener("click",  updateTextInputFieldConfig);
SettingsElement.textInputFieldConfig.visible.addEventListener("click", updateTextInputFieldConfig);

// text underline
SettingsElement.textUnderlineConfig.off.addEventListener("click", updateTextUnderlineConfig);
SettingsElement.textUnderlineConfig.on.addEventListener("click",  updateTextUnderlineConfig);

// text whitespace
SettingsElement.textWhitespaceConfig.off.addEventListener("click",          updateTextWhitespaceConfig);
SettingsElement.textWhitespaceConfig.style.bullet.addEventListener("click", updateTextWhitespaceConfig);
SettingsElement.textWhitespaceConfig.style.space.addEventListener("click",  updateTextWhitespaceConfig);
SettingsElement.textWhitespaceConfig.style.bar.addEventListener("click",    updateTextWhitespaceConfig);

// text highlight
SettingsElement.textHighlightConfig.off.addEventListener("click",         updateTextHighlightConfig);
SettingsElement.textHighlightConfig.mode.letter.addEventListener("click", updateTextHighlightConfig);
SettingsElement.textHighlightConfig.mode.word.addEventListener("click",   updateTextHighlightConfig);

// flip text highlight
SettingsElement.flipTextHighlightConfig.off.addEventListener("click", updateFlipTextHighlightConfig);
SettingsElement.flipTextHighlightConfig.on.addEventListener("click",  updateFlipTextHighlightConfig);

// modifier keys
SettingsElement.modifierKeyConfig.alt.addEventListener("click",  updateModifierKeyConfig);
SettingsElement.modifierKeyConfig.ctrl.addEventListener("click", updateModifierKeyConfig);
SettingsElement.modifierKeyConfig.meta.addEventListener("click", updateModifierKeyConfig);

// delete text
SettingsElement.deletionConfig.off.addEventListener("click", updateDeletionConfig);
SettingsElement.deletionConfig.on.addEventListener("click", updateDeletionConfig);

// delete correct text
SettingsElement.delcorrectConfig.off.addEventListener("click", updateDelCorrectConfig);
SettingsElement.delcorrectConfig.on.addEventListener("click",  updateDelCorrectConfig);

// confidence
SettingsElement.userConfidenceConfig.low.addEventListener("click",  updateUserConfidenceConfig);
SettingsElement.userConfidenceConfig.high.addEventListener("click", updateUserConfidenceConfig);
SettingsElement.userConfidenceConfig.peak.addEventListener("click", updateUserConfidenceConfig);

// difficulty
SettingsElement.testDifficultyConfig.ease.addEventListener("click",   updateTestDifficultyConfig);
SettingsElement.testDifficultyConfig.expert.addEventListener("click", updateTestDifficultyConfig);
SettingsElement.testDifficultyConfig.master.addEventListener("click", updateTestDifficultyConfig);

// strict space
SettingsElement.strictSpaceConfig.off.addEventListener("click", updateStrictSpaceConfig);
SettingsElement.strictSpaceConfig.on.addEventListener("click",  updateStrictSpaceConfig);

// error handling
SettingsElement.errorHandlingConfig.off.addEventListener("click",      updateErrorHandlingConfig);
SettingsElement.errorHandlingConfig.insert.addEventListener("click",   updateErrorHandlingConfig);
SettingsElement.errorHandlingConfig.skip.addEventListener("click",     updateErrorHandlingConfig);
SettingsElement.errorHandlingConfig.replace.addEventListener ("click", updateErrorHandlingConfig);

// forgive extra error
SettingsElement.errorHandlingConfig.forgive.off.addEventListener("click", updateForgiveErrorConfig);
SettingsElement.errorHandlingConfig.forgive.on.addEventListener("click",  updateForgiveErrorConfig);

// stop on error
SettingsElement.errorHandlingConfig.stop.off.addEventListener("click",    updateStopOnErrorConfig);
SettingsElement.errorHandlingConfig.stop.letter.addEventListener("click", updateStopOnErrorConfig);
SettingsElement.errorHandlingConfig.stop.word.addEventListener("click",   updateStopOnErrorConfig);

// go blind
SettingsElement.goBlindConfig.off.addEventListener("click", updateGoBlindConfig);
SettingsElement.goBlindConfig.on.addEventListener("click",  updateGoBlindConfig);

// quickend
SettingsElement.quickEndConfig.off.addEventListener("click", updateQuickEndConfig);
SettingsElement.quickEndConfig.on.addEventListener("click",  updateQuickEndConfig);

// use opposite shift mode
SettingsElement.useOppositeShiftConfig.off.addEventListener("click", updateUseOppositeShiftConfig);
SettingsElement.useOppositeShiftConfig.on.addEventListener("click",  updateUseOppositeShiftConfig);

// minimum speed
SettingsElement.minimumThresholdConfig.speed.off.addEventListener("click", updateMinimumSpeedThresholdConfig);
SettingsElement.minimumThresholdConfig.speed.on.addEventListener("click",  updateMinimumSpeedThresholdConfig);
SettingsElement.minimumThresholdConfig.speed.thresholdInput.addEventListener("input",    updateMinimumSpeedThresholdInput);
SettingsElement.minimumThresholdConfig.speed.thresholdInput.addEventListener("focusout", updateMinimumSpeedThresholdInputOnFoucsOut);

// minimum accuracy
SettingsElement.minimumThresholdConfig.accuracy.off.addEventListener("click", updateMinimumAccuracyThresholdConfig);
SettingsElement.minimumThresholdConfig.accuracy.on.addEventListener("click",  updateMinimumAccuracyThresholdConfig);
SettingsElement.minimumThresholdConfig.accuracy.thresholdInput.addEventListener("input",    updateMinimumAccuracyThresholdInput);
SettingsElement.minimumThresholdConfig.accuracy.thresholdInput.addEventListener("focusout", updateMinimumAccuracyThresholdInputOnFoucsOut);

// minimum burst
SettingsElement.minimumThresholdConfig.burst.off.addEventListener("click",          updateMinimumBurstThresholdConfig);
SettingsElement.minimumThresholdConfig.burst.option.fixed.addEventListener("click", updateMinimumBurstThresholdConfig);
SettingsElement.minimumThresholdConfig.burst.option.flex.addEventListener("click",  updateMinimumBurstThresholdConfig);
SettingsElement.minimumThresholdConfig.burst.thresholdInput.addEventListener("input",    updateMinimumBurstThresholdInput);
SettingsElement.minimumThresholdConfig.burst.thresholdInput.addEventListener("focusout", updateMinimumBurstThresholdInputOnFoucsOut);

// caret style
SettingsElement.caretStyleConfig.off.addEventListener("click", updateCaretStyleConfig);
SettingsElement.caretStyleConfig.style.underscore.addEventListener("click", updateCaretStyleConfig);
SettingsElement.caretStyleConfig.style.line.addEventListener("click", updateCaretStyleConfig);
SettingsElement.caretStyleConfig.style.box.addEventListener("click", updateCaretStyleConfig);
SettingsElement.caretStyleConfig.style.block.addEventListener("click", updateCaretStyleConfig);

// caret color
SettingsElement.caretColorConfig.selectorInput.addEventListener("input", updateCaretColorSelectorInput);
SettingsElement.caretColorConfig.textInput.addEventListener("input", updateCaretColorTextInput);

// primary text color
SettingsElement.textColorConfig.primary.selectorInput.addEventListener("input", updatePrimaryTextColorSelectorInput);
SettingsElement.textColorConfig.primary.textInput.addEventListener("input", updatePrimaryTextColorTextInput);

// secondary text color
SettingsElement.textColorConfig.secondary.selectorInput.addEventListener("input", updateSecondaryTextColorSelectorInput);
SettingsElement.textColorConfig.secondary.textInput.addEventListener("input", updateSecondaryTextColorTextInput);

// timer seconds count
SettingsElement.timerSecondsCountConfig.off.addEventListener("click", updateTimerSecondsCountConfig);
SettingsElement.timerSecondsCountConfig.seconds15.addEventListener("click", updateTimerSecondsCountConfig);
SettingsElement.timerSecondsCountConfig.seconds30.addEventListener("click", updateTimerSecondsCountConfig);
SettingsElement.timerSecondsCountConfig.seconds60.addEventListener("click", updateTimerSecondsCountConfig);
SettingsElement.timerSecondsCountConfig.seconds120.addEventListener("click", updateTimerSecondsCountConfig);
SettingsElement.timerSecondsCountConfig.customSecondsButton.addEventListener("click", updateTimerSecondsCountConfig);
SettingsElement.timerSecondsCountConfig.customSecondsInput.addEventListener("input", updateTimerSecondsCountInputField);
SettingsElement.timerSecondsCountConfig.customSecondsInput.addEventListener("focusout", updateTimerSecondsCountInputFieldOnFocusOut);

// text word count
SettingsElement.textWordsCountConfig.off.addEventListener("click", updateTextWordsCountConfig);
SettingsElement.textWordsCountConfig.words10.addEventListener("click", updateTextWordsCountConfig);
SettingsElement.textWordsCountConfig.words25.addEventListener("click", updateTextWordsCountConfig);
SettingsElement.textWordsCountConfig.words50.addEventListener("click", updateTextWordsCountConfig);
SettingsElement.textWordsCountConfig.words100.addEventListener("click", updateTextWordsCountConfig);
SettingsElement.textWordsCountConfig.customWordsCountButton.addEventListener("click", updateTextWordsCountConfig);
SettingsElement.textWordsCountConfig.customWordsCountInput.addEventListener("input", updateTextWordsCountInputField);
SettingsElement.textWordsCountConfig.customWordsCountInput.addEventListener("focusout", updateTextWordsCountInputFieldOnFoucsOut);

// text word length
SettingsElement.lengthOfWordsInTextConfig.off.addEventListener("click", updateLengthOfWordsInTextConfig);
SettingsElement.lengthOfWordsInTextConfig.short.addEventListener("click", updateLengthOfWordsInTextConfig);
SettingsElement.lengthOfWordsInTextConfig.medium.addEventListener("click", updateLengthOfWordsInTextConfig);
SettingsElement.lengthOfWordsInTextConfig.long.addEventListener("click", updateLengthOfWordsInTextConfig);

// font size slider
SettingsElement.textFontSizeConfig.fontSizeInput.addEventListener("input", updateTextFontSizeConfig);

// font weight slider
SettingsElement.textFontWeightConfig.fontWeightInput.addEventListener("input", updateTextFontWeightConfig);

// pacecaret speed (s5)
SettingsElement.paceCaretSpeedConfig.off.addEventListener("click", updatePaceCaretSpeedConfig);
SettingsElement.paceCaretSpeedConfig.last.addEventListener("click", updatePaceCaretSpeedConfig);
SettingsElement.paceCaretSpeedConfig.average.addEventListener("click", updatePaceCaretSpeedConfig);
SettingsElement.paceCaretSpeedConfig.best.addEventListener("click", updatePaceCaretSpeedConfig);
SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedButton.addEventListener("click", updatePaceCaretSpeedConfig);
SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedInput.addEventListener("input", updatePaceCaretSpeedInputField);
SettingsElement.paceCaretSpeedConfig.paceCaretCustomSpeedInput.addEventListener("focusout", updatePaceCaretSpeedInputFieldOnFocusOut);

// pacecaret style
SettingsElement.paceCaretStyleConfig.off.addEventListener("click", updatePaceCaretStyleConfig);
SettingsElement.paceCaretStyleConfig.style.underscore.addEventListener("click", updatePaceCaretStyleConfig);
SettingsElement.paceCaretStyleConfig.style.line.addEventListener("click", updatePaceCaretStyleConfig);
SettingsElement.paceCaretStyleConfig.style.box.addEventListener("click", updatePaceCaretStyleConfig);
SettingsElement.paceCaretStyleConfig.style.block.addEventListener("click", updatePaceCaretStyleConfig);

// include specials in text (digit, punctuation)
SettingsElement.includeSpecialsInTextConfig.digit.addEventListener("click", updateIncludeSpecialsInTextConfig);
SettingsElement.includeSpecialsInTextConfig.punctuation.addEventListener("click", updateIncludeSpecialsInTextConfig);

// typing speed measurement unit
SettingsElement.stats.unit.cpm.addEventListener("click", updateTypingSpeedMeasurementUnitConfig);
SettingsElement.stats.unit.wpm.addEventListener("click", updateTypingSpeedMeasurementUnitConfig);

// warnings
SettingsElement.warning.capslock.addEventListener("click", updateWarnings);
SettingsElement.warning.numlock.addEventListener("click", updateWarnings);
SettingsElement.warning.scrolllock.addEventListener("click", updateWarnings);
SettingsElement.warning.focusout.addEventListener("click", updateWarnings);

// live stats
SettingsElement.stats.live.speed.addEventListener("click", updateLiveStats);
SettingsElement.stats.live.accuracy.addEventListener("click", updateLiveStats);
SettingsElement.stats.live.burst.addEventListener("click", updateLiveStats);

// keyboard reaction
SettingsElement.UIKeyboardReactionConfig.off.addEventListener("click", updateUIKeyboardReactionConfig);
SettingsElement.UIKeyboardReactionConfig.static.addEventListener("click", updateUIKeyboardReactionConfig);
SettingsElement.UIKeyboardReactionConfig.react.addEventListener("click", updateUIKeyboardReactionConfig);
SettingsElement.UIKeyboardReactionConfig.next.addEventListener("click", updateUIKeyboardReactionConfig);

// keyboard layout emulate
SettingsElement.UIKeyboardLayoutEmulateConfig.off.addEventListener("click", updateUIKeyboardLayoutEmulateConfig);
SettingsElement.UIKeyboardLayoutEmulateConfig.on.addEventListener("click", updateUIKeyboardLayoutEmulateConfig);

// text word length
function updateLengthOfWordsInTextConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (this.value === "off" && config.text.word.length.off) || (this.value === "short" && config.text.word.length.short) || (this.value === "medium" && config.text.word.length.medium) || (this.value === "long" && config.text.word.length.long) ) return;

	SettingChangeInUI.changeTextWordLengthInUI(this.value);
	SettingChangeInConfig.changeTextWordLengthInConfig(this.value);

	// debug
	console.log("word length:", config.text.word.length.off, config.text.word.length.short, config.text.word.length.medium, config.text.word.length.long);
}

// keyboard reaction (s4)
function updateUIKeyboardReactionConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.keyboard.reaction.off && this.value === "off") || (config.keyboard.reaction.static && this.value === "static") || (config.keyboard.reaction.react && this.value === "react") || (config.keyboard.reaction.next && this.value === "next") ) return;

	SettingChangeInUI.changeKeyboardReactionInUI(this.value);
	SettingChangeInConfig.changeKeyboardReactionInConfig(this.value);

	// debug
	console.log("keyboardReation:", config.keyboard.reaction.off, config.keyboard.reaction.static, config.keyboard.reaction.react, config.keyboard.reaction.next);
}

// keyboard layout emulate (s2)
function updateUIKeyboardLayoutEmulateConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.keyboard.layout.emulate && this.value === "on") || (!config.keyboard.layout.emulate && this.value === "off") ) return;

	SettingChangeInUI.changeKeyboardLayoutEmulateInUI(this.value);
	SettingChangeInConfig.changeKeyboardLayoutEmulateInConfig(this.value);

	// debug
	console.log("keyboardLayoutEmulate:", !config.keyboard.layout.emulate, config.keyboard.layout.emulate);
}

// text input (s2)
function updateTextInputFieldConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.input.hidden && this.value === "hidden") || (config.text.input.visible && this.value === "visible") ) return;

	SettingChangeInUI.changeTextInputInUI(this.value);
	SettingChangeInConfig.changeTextInputInConfig(this.value);

	// debug
	console.log("textInput:", config.text.input.hidden, config.text.input.visible);
}

// tape mode (s3)
function updateTapeModeConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.tape.off && this.value === "off") || (config.tape.mode.letter && this.value === "letter") || (config.tape.mode.word && this.value === "word") ) return;
	
	SettingChangeInUI.changeTapeModeInUI(this.value);
	SettingChangeInConfig.changeTapeModeInConfig(this.value);

	// debug
	console.log("tapeMode:", config.tape.off, config.tape.mode.letter, config.tape.mode.word);
}

// text highlight (s3)
function updateTextHighlightConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.highlight.off && this.value === "off") || (config.text.highlight.mode.letter && this.value === "letter") || (config.text.highlight.mode.word && this.value === "word")) return;

	SettingChangeInUI.changeTextHightlightInUI(this.value);
	SettingChangeInConfig.changeTextHightlightInConfig(this.value)

	// debug
	console.log("textHighlight:", config.text.highlight.off, config.text.highlight.mode.letter, config.text.highlight.mode.word);
}

// flip text highlight (s2)
function updateFlipTextHighlightConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.highlight.flip && this.value === "on") || (!config.text.highlight.flip && this.value === "off") ) return;

	SettingChangeInUI.changeFlipTextHightlightInUI(this.value);
	SettingChangeInConfig.changeFlipTextHightlightInConfig(this.value);

	// flip primary & secondary colors
	const computedStyles = window.getComputedStyle(document.querySelector(":root"));
	let primary = computedStyles.getPropertyValue("--text-primary-color");
	let secondary = computedStyles.getPropertyValue("--text-secondary-color");
	css.style.setProperty("--text-primary-color", secondary);
	css.style.setProperty("--text-secondary-color", primary);

	TypingAreaElements.input.focus();

	// debug
	console.log("flipTextHighlight:", !config.text.highlight.flip, config.text.highlight.flip);
}

// text underline (s2)
function updateTextUnderlineConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.underline && this.value === "on") || (!config.text.underline && this.value === "off") ) return;

	SettingChangeInUI.changeTextUnderlineInUI(this.value);
	SettingChangeInConfig.changeTextUnderlineInConfig(this.value);

	// debug
	console.log("textUnderline:", !config.text.underline, config.text.underline);
}

// text whitespace (s4)
function updateTextWhitespaceConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.whitespace.off && this.value === "off") || (config.text.whitespace.type.bullet && this.value === "bullet") || (config.text.whitespace.type.space && this.value === "space") || (config.text.whitespace.type.bar && this.value === "bar") ) return;

	SettingChangeInUI.changeTextWhitespaceInUI(this.value);
	SettingChangeInConfig.changeTextWhitespaceInConfig(this.value);

	// debug
	console.log("whitespace:", config.text.whitespace.off, config.text.whitespace.type.space, config.text.whitespace.type.bullet, config.text.whitespace.type.bar, config.text.whitespace.character, config.text.whitespace.code);
}

// strictspace (s2)
function updateStrictSpaceConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.strictspace && this.value === "on") || (!config.strictspace && this.value === "off")) return;

	SettingChangeInUI.changeStrictSpaceInUI(this.value);
	SettingChangeInConfig.changeStrictSpaceInConfig(this.value);

	// debug
	console.log("strictSpace:", !config.strictspace, config.strictspace);
}

// quickend (s2)
function updateQuickEndConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.quickend && this.value === "on") || (!config.quickend && this.value === "off")) return;

	SettingChangeInUI.changeQuickEndInUI(this.value);
	SettingChangeInConfig.changeQuickEndInConfig(this.value);

	// debug
	console.log("quickEnd:", !config.quickend, config.quickend);
}

// difficulty (s3)
function updateTestDifficultyConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.difficulty.ease && this.value === "ease") || (config.difficulty.expert && this.value === "expert") || (config.difficulty.master && this.value === "master") ) return;

	SettingChangeInUI.changeDifficultyInUI(this.value);
	SettingChangeInConfig.changeDifficultyInConfig(this.value)

	// debug
	console.log("difficulty:", config.difficulty.ease, config.difficulty.expert, config.difficulty.master);
}

// confidence (s3)
function updateUserConfidenceConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.confidence.low && this.value === "low") || (config.confidence.high && this.value === "high") || (config.confidence.peak && this.value === "peak") ) return;

	SettingChangeInUI.changeConfidenceInUI(this.value);
	SettingChangeInConfig.changeConfidenceInConfig(this.value);

	// at peak confidence backspacing is not allowed, so backspace is disabled
	if ( this.value === "peak" ) {
		SettingChangeInUI.changeBackspaceKeyInUI("off");
		SettingChangeInConfig.changeBackspaceKeyInConfig("off");

		// at peak confidence backspace is disabled, so user cannot delete at all
		if ( config.backspace.allowedOnCorrectWord ) {
			SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI("off");
			SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig("off");
		}
	}

	// going back to low or high confidence from peak confidence (and backspace is disabled)
	if ( ((this.value === "low") || (this.value === "high")) && config.backspace.off ) {
		SettingChangeInUI.changeBackspaceKeyInUI("on");
		SettingChangeInConfig.changeBackspaceKeyInConfig("on");
	}

	// confidence high prevents user to delete previous word regardless of it was typed correctly or incorrectly
	if ( (this.value === "high") && config.backspace.allowedOnCorrectWord ) {
		SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI("off");
		SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig("off");
	}

	// debug
	console.log("confidence:", config.confidence.low, config.confidence.high, config.confidence.peak);
}

// backspace key (s2)
function updateDeletionConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.backspace.off && this.value === "off") || (!config.backspace.off && this.value === "on") ) return;

	SettingChangeInUI.changeBackspaceKeyInUI(this.value);
	SettingChangeInConfig.changeBackspaceKeyInConfig(this.value);

	// dependencies
	if ( this.value === "off" ) {
		// backspace off means confidence is at peak
		SettingChangeInUI.changeConfidenceInUI("peak");
		SettingChangeInConfig.changeConfidenceInConfig("peak");

		// no concept of deleting on correct if backspace is disabled
		if ( config.backspace.allowedOnCorrectWord ) {
			SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI("off");
			SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig("off");
		}
	} else {
		// on confidence low backspacing is set to default value of low
		SettingChangeInUI.changeConfidenceInUI("low");
		SettingChangeInConfig.changeConfidenceInConfig("low");
	}

	// debug
	console.log("backspace.off:", !config.backspace.off, config.backspace.off);
}

// deletion not allowed on correct (s2)
function updateDelCorrectConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.backspace.allowedOnCorrectWord && this.value === "on") || (!config.backspace.allowedOnCorrectWord && this.value === "off") ) return;
	
	SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI(this.value);
	SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig(this.value);

	// when deletion of correct words is enabled then disable high/peak confidence mode and enable backspace if its disabled
	if ( config.backspace.allowedOnCorrectWord && (config.confidence.high || config.confidence.peak) ) {
		SettingChangeInUI.changeConfidenceInUI("low");
		SettingChangeInConfig.changeConfidenceInConfig("low");

		if ( config.backspace.off ) {
			SettingChangeInUI.changeBackspaceKeyInUI("on");
			SettingChangeInConfig.changeBackspaceKeyInConfig("on");	
		}
	}
	
	// debug
	console.log("delete on correct:", !config.backspace.allowedOnCorrectWord, config.backspace.allowedOnCorrectWord);
}

// modifier keys (s3)
function updateModifierKeyConfig(evt) {
	if ( !evt.isTrusted ) return;
	
	SettingChangeInConfig.changeModifierKeyInConfig();

	// debug
	console.log("modifier:", config.backspace.modifier.alt, config.backspace.modifier.ctrl, config.backspace.modifier.meta);
}

// error (s4)
function updateErrorHandlingConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.error.off && this.value === "off") || (config.error.insert && this.value === "insert") || (config.error.skip && this.value === "skip") || (config.error.replace && this.value === "replace") ) return;

	SettingChangeInUI.changeErrorInUI(this.value);
	SettingChangeInConfig.changeErrorInConfig(this.value);

	// error insert, skip, replace, forgive is disabled, enable stop on letter
	if ( config.error.off ) {
		if ( !config.error.stop.letter ) { // disble stop on error
			SettingChangeInUI.changeStopOnErrorInUI("letter");
			SettingChangeInConfig.changeStopOnErrorInConfig("letter");
		}
		if ( config.error.forgive ) { // disable forgive error
			SettingChangeInUI.changeForgiveErrorInUI("off");
			SettingChangeInConfig.changeForgiveErrorInConfig("off");
		}
	} else { // either insert/skip/replace is selected
		if ( config.blind ) { // disable blind mode
			SettingChangeInUI.changeBlindModeInUI("off");
			SettingChangeInConfig.changeBlindModeInConfig("off");
		}
	}
		
	// disable stop on letter when in insert, skip, replace modes
	if ( !config.error.off && config.error.stop.letter	) {
		SettingChangeInUI.changeStopOnErrorInUI("off");
		SettingChangeInConfig.changeStopOnErrorInConfig("off");
	}

	// forgive error is not possible in skip & replace
	if ( (config.error.skip || config.error.replace) && config.error.forgive ) {
		// it is possible to enable/disable forgive error in error insert, but not in
		// error skip/replace so forgive error should be disabled
		SettingChangeInUI.changeForgiveErrorInUI("off");
		SettingChangeInConfig.changeForgiveErrorInConfig("off");
	}

	// debug
	console.log("error:", config.error.off, config.error.insert, config.error.skip, config.error.replace);
}

// forgive error (s2)
function updateForgiveErrorConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.error.forgive && this.value === "on") || (!config.error.forgive && this.value === "off") ) return;
	
	SettingChangeInUI.changeForgiveErrorInUI(this.value);
	SettingChangeInConfig.changeForgiveErrorInConfig(this.value);

	// error forgive require error insert, so disable error skip/replace and enable
	// insert, i.e, insertion of errors is necessary in order to forgive them
	if ( config.error.forgive && !config.error.insert ) {
		SettingChangeInUI.changeErrorInUI("insert");
		SettingChangeInConfig.changeErrorInConfig("insert");		
	}

	if ( config.error.forgive && config.blind ) { // disable blind mode
		SettingChangeInUI.changeBlindModeInUI("off");
		SettingChangeInConfig.changeBlindModeInConfig("off");
	}
	
	// debug
	console.log("forgiveError:", !config.error.forgive, config.error.forgive);
}

// stop on error (s3)
function updateStopOnErrorConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.error.stop.off && this.value === "off") || (config.error.stop.letter && this.value === "letter") || (config.error.stop.word && this.value === "word") ) return;

	SettingChangeInUI.changeStopOnErrorInUI(this.value);
	SettingChangeInConfig.changeStopOnErrorInConfig(this.value);
	
	// disable blind mode
	if ( (config.error.stop.letter || config.error.stop.word) && config.blind ) {
		SettingChangeInUI.changeBlindModeInUI("off");
		SettingChangeInConfig.changeBlindModeInConfig("off");
	}

	if ( config.error.stop.letter ) {
		// caret will be stopped before letter so insert, skip, replace, forgive is not possible
		if ( !config.error.off ) {
			SettingChangeInUI.changeErrorInUI("off");
			SettingChangeInConfig.changeErrorInConfig("off");

			if ( config.error.forgive ) {
				SettingChangeInUI.changeForgiveErrorInUI("off");
				SettingChangeInConfig.changeForgiveErrorInConfig("off");
			}
		}
	} else if ( config.error.stop.word ) {
		if ( config.backspace.off ) {			
			SettingChangeInUI.changeBackspaceKeyInUI("on");
			SettingChangeInConfig.changeBackspaceKeyInConfig("on");	
		}
		if ( config.error.off ) {
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");			
		}
	} else {
		if ( !config.error.insert ) { // set to default
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");
		}
	}

	// debug
	console.log("stopOnError:", config.error.stop.off, config.error.stop.letter, config.error.stop.word);
}

// blind mode
function updateGoBlindConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.blind && this.value === "on") || (!config.blind && this.value === "off") ) return;

	SettingChangeInUI.changeBlindModeInUI(this.value);
	SettingChangeInConfig.changeBlindModeInConfig(this.value);

	// no error handling in blind mode, so disable insert, skip, replace, forgive
	if ( config.blind ) {
		if ( !config.error.off ) { // disbale insert, skip, replace
			SettingChangeInUI.changeErrorInUI("off");
			SettingChangeInConfig.changeErrorInConfig("off");
		}
		if ( config.error.forgive ) { // disable forgive error
			SettingChangeInUI.changeForgiveErrorInUI("off");
			SettingChangeInConfig.changeForgiveErrorInConfig("off");
		}
		if ( !config.error.stop.off ) { // disable stop on error
			SettingChangeInUI.changeStopOnErrorInUI("off");
			SettingChangeInConfig.changeStopOnErrorInConfig("off");
		}
	} else {
		if ( !config.error.insert ) { // set to default
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");
		}
	}
	
	// debug
	console.log("blindMode:", !config.blind, config.blind);
}

// opposite shift mode (s2)
function updateUseOppositeShiftConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.oppositeshift && this.value === "on") || (!config.oppositeshift && this.value === "off") ) return;

	SettingChangeInUI.changeOppositeShiftModeInUI(this.value);
	SettingChangeInConfig.changeOppositeShiftModeInConfig(this.value);

	// debug
	console.log("oppositeShift:", config.oppositeshift);
}

// minimum speed (s3)
function updateMinimumSpeedThresholdConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.minimum.speed.off && this.value === "off") || (!config.minimum.speed.off && this.value === "on") ) return;

	SettingChangeInUI.changeMinimumSpeedInUI(this.value);
	SettingChangeInConfig.changeMinimumSpeedInConfig(this.value);

	// focus in input field when user clicks on "on" button
	if ( this.value === "on" ) {
		SettingsElement.minimum.speed.thresholdInput.focus();
	} else {
		SettingsElement.minimum.speed.thresholdInput.value = "";
	}

	// debug
	console.log("minSpeed:", config.minimum.speed.off);
}

// minimum speed threashold input (s1)
function updateMinimumSpeedThresholdInput(evt) {
	if ( !evt.isTrusted ) return;

	// turn "on" button active if not
	if ( SettingsElement.minimum.speed.off.id === "selected" ) {
		SettingChangeInUI.changeMinimumSpeedInUI("on");
		SettingChangeInConfig.changeMinimumSpeedInConfig("on");
	}
	config.minimum.speed.threshold = Number(this.value); // update in config

	// debug
	console.log("minSpeedThreshold:", config.minimum.speed.threshold);
}

// minimum speed threshold input (focusout)
function updateMinimumSpeedThresholdInputOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field
	if ( (this.value === "" || this.value === "0") && SettingsElement.minimum.speed.on.id === "selected" ) {
		SettingChangeInUI.changeMinimumSpeedInUI("off");
		SettingChangeInConfig.changeMinimumSpeedInConfig("off");
		this.value = "";
	}

	// debug
	console.log("INPUT FOCUS-OUT (minSpeedThreshold)");
}

// minimum accuracy (s3)
function updateMinimumAccuracyThresholdConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.minimum.accuracy.off && this.value === "off") || (!config.minimum.accuracy.off && this.value === "on") ) return;

	SettingChangeInUI.changeMinimumAccuracyInUI(this.value);
	SettingChangeInConfig.changeMinimumAccuracyInConfig(this.value);

	// focus in input field when user clicks on "on" button
	if ( this.value === "on" ) {
		SettingsElement.minimum.accuracy.thresholdInput.focus();
	} else {
		SettingsElement.minimum.accuracy.thresholdInput.value = "";
	}

	// debug
	console.log("minAccuracy:", config.minimum.accuracy.off);
}

// minimum accuracy threashold input (s1)
function updateMinimumAccuracyThresholdInput(evt) {
	if ( !evt.isTrusted ) return;
	
	// turn on "on" button active if not
	if ( SettingsElement.minimum.accuracy.off.id === "selected" ) {
		SettingChangeInUI.changeMinimumAccuracyInUI("on");
		SettingChangeInConfig.changeMinimumAccuracyInConfig("on");
	}
	config.minimum.accuracy.threshold = Number(this.value); // update in config

	// debug
	console.log("minAccuracyThreshold:", config.minimum.accuracy.threshold);
}

// minimum accuracy threshold input (focusout)
function updateMinimumAccuracyThresholdInputOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field
	if ( (this.value === "" || this.value === "0") && SettingsElement.minimum.accuracy.on.id === "selected" ) {
		SettingChangeInUI.changeMinimumAccuracyInUI("off");
		SettingChangeInConfig.changeMinimumAccuracyInConfig("off");
		this.value = "";
	}

	// debug
	console.log("INPUT FOCUS-OUT (minAccuracyThreshold)");
}

// minimum burst (s3)
function updateMinimumBurstThresholdConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.minimum.burst.off && this.value === "off") || (config.minimum.burst.option.fixed && this.value === "fixed") || (config.minimum.burst.option.flex && this.value === "flex") ) return;

	SettingChangeInUI.changeMinimumBurstInUI(this.value);
	SettingChangeInConfig.changeMinimumBurstInConfig(this.value);

	// focus in input field when user clicks on flex or fixed buttons
	if ( this.value === "fixed" || this.value === "flex" ) {
		SettingsElement.minimum.burst.thresholdInput.focus();
	} else {
		SettingsElement.minimum.burst.thresholdInput.value = "";
	}

	// debug
	console.log("minBurst:", config.minimum.burst.off, config.minimum.burst.option.fixed, config.minimum.burst.option.flex);
}

// minimum burst threashold input (s1)
function updateMinimumBurstThresholdInput(evt) {
	if ( !evt.isTrusted ) return;

	// turn on "fixed" button active if user starts entering value into input field
	// without clicking on flex or fixed buttons first
	if ( SettingsElement.minimum.burst.off.id === "selected" ) {
		SettingChangeInUI.changeMinimumBurstInUI("fixed");
		SettingChangeInConfig.changeMinimumBurstInConfig("fixed");
	}
	config.minimum.burst.threshold = Number(this.value);  // update in config

	// debug
	console.log("minBurstThreshold [input]:", config.minimum.burst.threshold);
}

// minimum burst threshold input (focusout)
function updateMinimumBurstThresholdInputOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field
	if ( (this.value === "" || this.value === "0") && (SettingsElement.minimum.burst.option.fixed.id === "selected" || SettingsElement.minimum.burst.option.flex.id === "selected") ) {
		SettingChangeInUI.changeMinimumBurstInUI("off");
		SettingChangeInConfig.changeMinimumBurstInConfig("off");
		this.value = "";
	}

	// debug
	console.log("INPUT FOCUS-OUT (minBurstThreshold)");
}

// text word count (s5)
function updateTextWordsCountConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.text.word.count === -1 && this.value === "off") || (config.text.word.count === -2 && this.value === "custom") || (config.text.word.count === 10 && this.value === "10") || (config.text.word.count === 25 && this.value === "25") || (config.text.word.count === 50 && this.value === "50") || (config.text.word.count === 100 && this.value === "100") ) return;

	SettingChangeInUI.changeTextWordCountInUI(this.value);
	SettingChangeInConfig.changeTextWordCountInConfig(this.value);

	// if words mode is disabled then enable default timer mode
	if ( this.value === "off" ) {
		SettingChangeInUI.changeTimerSecondsInUI("60");
		SettingChangeInConfig.changeTimerSecondsInConfig("60");
		return;
	} else { // words mode is enabled so disable timer mode
		SettingChangeInUI.changeTimerSecondsInUI("off");
		SettingChangeInConfig.changeTimerSecondsInConfig("off");
	}

	// focus in input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		SettingsElement.textWordCount.count.customWordsInput.focus();
	} else {
		SettingsElement.textWordCount.count.customWordsInput.value = ""; // clear input field
		Test.restart();
	}

	// debug
	console.log("numberOfWords:", config.text.word.count);
}

// text word count input (s1)
function updateTextWordsCountInputField(evt) {
	if ( !evt.isTrusted ) return;

	// make custom button active if not
	if ( SettingsElement.textWordCount.count.custom.id !== "selected" ) {
		SettingChangeInUI.changeTextWordCountInUI("custom");
		SettingChangeInConfig.changeTextWordCountInConfig("custom");
	}

	 // update in config (i.e, override -2 initial value)
	config.text.word.count = Number(this.value);

	// debug
	console.log("numberOfWords [input]:", config.text.word.count);
}

// text word count input - focusout (s1)
function updateTextWordsCountInputFieldOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field (turn off custom button)
	if ( (this.value === "" || this.value === "0") && (SettingsElement.textWordCount.count.custom.id === "selected") ) {
		
		if ( this.value === "0" ) { // 0 word is not possible
			setTimeout(() => {
				SettingChangeInUI.changeTextWordCountInUI("off");
				SettingChangeInConfig.changeTextWordCountInConfig("off");
				this.value = "";
			}, 250);
		} else {
			SettingChangeInUI.changeTextWordCountInUI("off");
			SettingChangeInConfig.changeTextWordCountInConfig("off");
		}
	}

	if ( this.value === "" ) { // set to default
		SettingChangeInUI.changeTextWordCountInUI("25");
		SettingChangeInConfig.changeTextWordCountInConfig("25");
	}

	// currently more than 150 words is not allowed in custom input field
	if ( config.text.word.count > 150 ) {
		SettingChangeInUI.changeTextWordCountInUI("100");
		SettingChangeInConfig.changeTextWordCountInConfig("100");
	}

	Test.restart();

	// debug
	console.log("INPUT FOCUS-OUT (numberOfWords)");
}

// timer seconds (s5)
function updateTimerSecondsCountConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.stats.timer.time === -2 && this.value === "custom") || (config.stats.timer.time === -1 && this.value === "off") || (config.stats.timer.time === 15 && this.value === "15") || (config.stats.timer.time === 30 && this.value === "30") || (config.stats.timer.time === 60 && this.value === "60") || (config.stats.timer.time === 120 && this.value === "120") ) return;

	SettingChangeInUI.changeTimerSecondsInUI(this.value);
	SettingChangeInConfig.changeTimerSecondsInConfig(this.value);

		// if timer mode is disabled then enable default words mode
		if ( this.value === "off" ) {
			SettingChangeInUI.changeTextWordCountInUI("25");
			SettingChangeInConfig.changeTextWordCountInConfig("25");
			Test.restart();
			return;
		} else { // timer mode is enabled so disable words mode
			SettingChangeInUI.changeTextWordCountInUI("off");
			SettingChangeInConfig.changeTextWordCountInConfig("off");
		}	

	// focus to input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		SettingsElement.timer.time.customSecondsInput.focus();
	} else {
		SettingsElement.timer.time.customSecondsInput.value = "";
	}

	// debug
	console.log("numberOfSeconds:", config.stats.timer.time);
}

// timer custom seconds input (s1)
function updateTimerSecondsCountInputField(evt) {
	if ( !evt.isTrusted ) return;

	// make custom button active if not
	if ( SettingsElement.timer.time.custom.id !== "selected" ) {
		SettingChangeInUI.changeTimerSecondsInUI("custom");
		SettingChangeInConfig.changeTimerSecondsInConfig("custom");
	}
	config.stats.timer.time = Number(this.value); // update in config (i.e, override -2 initial value)

	// debug
	console.log("numberOfSeconds [input]:", config.stats.timer.time);
}

// timer custom seconds input - focusout (s1)
function updateTimerSecondsCountInputFieldOnFocusOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field (turn off custom button)
	if ( (this.value === "") && (SettingsElement.timer.time.custom.id === "selected") ) {
		SettingChangeInUI.changeTimerSecondsInUI("off");
		SettingChangeInConfig.changeTimerSecondsInConfig("off");
	}

	// infinite timer mode
	if ( (SettingsElement.timer.time.custom.id === "selected") && (SettingsElement.timer.time.customSecondsInput.value === "0") ) {
		console.log("infinite timer mode..");
	}

	// debug
	console.log("INPUT FOCUS-OUT (numberOfSeconds)");
}

// pacecaret speed (s5)
function updatePaceCaretSpeedConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.pacecaret.off && this.value === "off") || (config.pacecaret.speed.last && this.value === "last") || (config.pacecaret.speed.average && this.value === "average") || (config.pacecaret.speed.best && this.value === "best") || (!config.pacecaret.speed.custom.off && this.value === "custom") ) return;

	SettingChangeInUI.changePaceCaretSpeedInUI(this.value);
	SettingChangeInConfig.changePaceCaretSpeedInConfig(this.value);

	// focus in input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.focus();
	} else {
		SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.value = "";
	}

	// debug
	console.log("paceCaretSpeed:", config.pacecaret.off, config.pacecaret.speed.last, config.pacecaret.speed.average, config.pacecaret.speed.best, config.pacecaret.speed.custom.off);
}

// pacecaret speed input (s5)
function updatePaceCaretSpeedInputField(evt) {
	if ( !evt.isTrusted ) return;

	// make custom button active if not
	if ( SettingsElement.pacecaret.speed.custom.id !== "selected" ) {
		SettingChangeInUI.changePaceCaretSpeedInUI("custom");
		SettingChangeInConfig.changePaceCaretSpeedInConfig("custom");
	}
	config.pacecaret.speed.custom.value = Number(this.value); // update in config

	// debug
	console.log("paceCaretSpeed [input]:", config.pacecaret.speed.custom.value);
}

// pacecaret speed input - focusout (s5)
function updatePaceCaretSpeedInputFieldOnFocusOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field (turn off custom button)
	if ( (this.value === "" || this.value === "0") && !config.pacecaret.speed.custom.off) {

		if ( this.value === "0" ) { // 0wpm speed for pacecaret is not possible
			setTimeout(() => {
				SettingChangeInUI.changePaceCaretSpeedInUI("off");
				SettingChangeInConfig.changePaceCaretSpeedInConfig("off");
				this.value = "";
			}, 250);
		} else {
			SettingChangeInUI.changePaceCaretSpeedInUI("off");
			SettingChangeInConfig.changePaceCaretSpeedInConfig("off");
		}
	}

	// debug
	console.log("INPUT FOCUS-OUT (paceCaretSpeed)");
}

// text font size slider (s1)
function updateTextFontSizeConfig(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-font-size", `${this.value}px`);
	SettingsElement.textFontSize.fontSizeDisplayBox.textContent = this.value;
	config.text.font.size = Number(this.value); // update in config
}

// text font weight slider (s1)
function updateTextFontWeightConfig(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-font-weight", `${this.value}`);
	SettingsElement.textFontWeight.fontWeightDisplayBox.textContent = this.value;
	config.text.font.weight = Number(this.value); // update in config
}

// primary text color picker input field
function updatePrimaryTextColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-primary-color", this.value);
	SettingsElement.textColor.primary.textInput.value = this.value; // update in text input field for primary color
	config.text.color.primary = this.value; // update in config
}

// primary text color text input field
function updatePrimaryTextColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-primary-color", this.value);
	SettingsElement.textColor.secondary.selectorInput = this.value; // update in color picker input field for primary color
	config.text.color.primary = this.value; // update in config
}

// secondary text color picker input field
function updateSecondaryTextColorSelectorInput(evt) { // selector input (color)
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-secondary-color", this.value);
	SettingsElement.textColor.secondary.textInput.value = this.value;  // update in text input field for secondary color
	config.text.color.secondary = this.value; // update in config
}

// secondary text color text input field
function updateSecondaryTextColorTextInput(evt) { // text input (color)
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-secondary-color", this.value);
	SettingsElement.textColor.secondary.selectorInput.value = this.value;
	config.text.color.secondary = this.value; // update in config
}

// caret color selector input field
function updateCaretColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--caret-color", this.value);
	SettingsElement.caret.color.textInput.value = this.value;
	config.caret.color = this.value; // update in config
}

// caret color text input field
function updateCaretColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--caret-color", this.value);
	SettingsElement.caret.color.selectorInput.value = this.value;
	config.caret.color = this.value; // update in config
}

// pacecaret color selector input field
function updatePaceCaretColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--pace-caret-color", this.value);
	SettingsElement.pacecaret.color.textInput.value = this.value;
	config.pacecaret.color = this.value; // update in config
}

// pacecaret color text input field
function updatePaceCaretColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--pace-caret-color", this.value);
	SettingsElement.pacecaret.color.selectorInput.value = this.value;
	config.pacecaret.color = this.value; // update in config
}

// warnings (s4)
function updateWarnings(evt) {
	if ( !evt.isTrusted ) return;

	SettingChangeInConfig.changeWarningsInConfig();

	// debug
	console.log("warning:", config.warnings.capslock, config.warnings.numlock, config.warnings.scrolllock, config.warnings.focusout);
}

// live stats (s3)
function updateLiveStats(evt) {
	if ( !evt.isTrusted ) return;

	SettingChangeInConfig.changeLiveStatsInConfig();

	// debug
	console.log("liveStats:", config.stats.live.speed, config.stats.live.accuracy, config.stats.live.burst);
}

// text include (s2)
function updateIncludeSpecialsInTextConfig(evt) {
	if ( !evt.isTrusted ) return;

	SettingChangeInConfig.changeTextIncludeInConfig();

	// debug
	console.log("textInclude:", config.text.include.digit, config.text.include.punctuation);
}

// show decimal places (s2)
function updateUseFloats(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.stats.usefloats && this.value === "on") || (!config.stats.usefloats && this.value === "off") ) return;

	SettingChangeInUI.changeUseFloatsInUI(this.value);
	SettingChangeInConfig.changeUseFloatsInConfig(this.value);

	// debug
	console.log("useFloats:", !config.stats.usefloats, config.stats.usefloats);
}

// speed unit (s2)
function updateTypingSpeedMeasurementUnitConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.stats.unit.cpm && this.value === "cpm") || (config.stats.unit.wpm && this.value === "wpm") ) return;

	SettingChangeInUI.changeSpeedUnitInUI(this.value);
	SettingChangeInConfig.changeSpeedUnitInConfig(this.value);

	// debug
	console.log("speedUnit:", config.stats.unit.cpm, config.stats.unit.wpm);
}

// live stats interval (s3)
function updateLiveStatsCalcInterval(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.stats.calcInterval.word && this.value === "word") || (config.stats.calcInterval.keystroke && this.value === "keystroke") || (config.stats.calcInterval.second && this.value === "second") ) return;

	SettingChangeInUI.changeLiveStatsCalcIntervalInUI(this.value);
	SettingChangeInConfig.changeLiveStatsCalcIntervalInConfig(this.value);
	
	// debug
	console.log("liveStatsInterval:", config.stats.calcInterval.word, config.stats.calcInterval.keystroke, config.stats.calcInterval.second);
}

// caret style (s5)
function updateCaretStyleConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === config.caret.style ) return;
	
	// change caret in text
	for ( const letter of document.getElementsByTagName("letter") ) {
		letter.classList.remove(config.caret.style);
		letter.classList.add(this.value);
		if ( letter.id === config.caret.style ) letter.id = this.value;
	}
	TypingAreaElements.input.focus();	

	SettingChangeInUI.changeCaretStyleInUI(this.value);
	SettingChangeInConfig.changeCaretStyleInConfig(this.value);

	// debug
	console.log("caret:", config.caret.style);
}

// pacecaret style (s5)
function updatePaceCaretStyleConfig(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === config.pacecaret.style ) return;

	SettingChangeInUI.changePaceCaretStyleInUI(this.value);
	SettingChangeInConfig.changePaceCaretStyleInConfig(this.value);

	// debug
	console.log("pacecaret:", config.pacecaret.style);
}

var detclick = false;
const det = document.querySelectorAll("details");

// details tag: on click, close all
det.forEach((detail) => {
	detail.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		det.forEach((dt) => { if ( detail !== dt ) dt.removeAttribute("open"); });
		detclick = true;
	});
});

// window: on click, close all
window.document.addEventListener("click", (evt) => {
	if ( !evt.isTrusted ) return;
	if ( !detclick ) { det.forEach((dt) => { dt.removeAttribute("open"); }); }
	detclick = false; // put at last (order matter)
});

// on esc, close all details
window.document.addEventListener("keydown", (evt) => {
	if ( !evt.isTrusted ) return;
	if ( evt.key === "Escape" ) { det.forEach((dt) => { dt.removeAttribute("open"); }); }
});

// debugging
det.forEach((detail) => {
	detail.addEventListener("toggle", (evt) => {
		if ( !evt.isTrusted ) return;
		console.log("details:", detail.classList[0], detail.open);
	});
});

const allDetails = {
	textFontFamily: {
		items: Array.from(document.querySelectorAll("details.textFontFamilyList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.textFontFamilyList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.textFontFamilyList summary div.text.value.in-use"),
	},
	textWordType: {
		items: Array.from(document.querySelectorAll("details.textWordTypeList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.textWordTypeList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.textWordTypeList summary div.text.value.in-use"),
	},
	textCapitalization: {
		items: Array.from(document.querySelectorAll("details.textCapitalizationList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.textCapitalizationList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.textCapitalizationList summary div.text.value.in-use"),
	},
	keyboardLanguage: {
		items: Array.from(document.querySelectorAll("details.UIKeyboardLanguageList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.UIKeyboardLanguageList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.UIKeyboardLanguageList summary div.text.value.in-use"),
	},
	keyboardLayout: {
		items: Array.from(document.querySelectorAll("details.UIKeyboardLayoutList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.UIKeyboardLayoutList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.UIKeyboardLayoutList summary div.text.value.in-use"),
	},
}

// put tick mark on select item
function tickMarkCorrectOption(evt, detail) {
	for ( const svg of allDetails[detail].SVGs ) {
		if ( svg?.parentElement?.parentElement.dataset.value === evt.currentTarget.dataset.value ) {
			svg.parentElement.classList.remove("unmarked");
			svg.classList.add("marked")
		} else {
			svg.parentElement.classList.add("unmarked");
			svg.classList.remove("marked")
		}
	}	
}

// details: textFontFamily
allDetails.textFontFamily.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === config.text.font.family ) return;

		config.text.font.family = evt.currentTarget.dataset.value; // update in config
		allDetails.textFontFamily.inUseTextBox.textContent = config.text.font.family; // update in ui
		css.style.setProperty("--text-font-family", config.text.font.family);
		tickMarkCorrectOption(evt, "textFontFamily");
		
		TypingAreaElements.input.focus();

		// debug
		console.log("font-family:", config.text.font.family);
	});
});

// details: typeOfWords
allDetails.textWordType.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === config.text.word.type ) return;

		config.text.word.type = evt.currentTarget.dataset.value; // update in config
		allDetails.textWordType.inUseTextBox.textContent = config.text.word.type; // update in ui
		tickMarkCorrectOption(evt, "textWordType");
		
		TypingAreaElements.input.focus();

		// debug
		console.log("word-type:", config.text.word.type);
	});
});

// details: typeOfWords
allDetails.textCapitalization.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		const value = evt.currentTarget.dataset.value;
		if ( (value === "off" && config.text.capitalization.off ) || (value === "randomly" && config.text.capitalization.randomly) || (value === "first" && config.text.capitalization.first) || (value === "everyfirst" && config.text.capitalization.everyfirst) || (value === "untidy" && config.text.capitalization.untidy) ) return;

		if ( value === "none" ) {
			config.text.capitalization.off = true;
			config.text.capitalization.first = false;
			config.text.capitalization.everyfirst = false;
			config.text.capitalization.randomly = false;
			config.text.capitalization.untidy = false;
		} else if ( value === "first" ) {
			config.text.capitalization.off = false;
			config.text.capitalization.first = true;
			config.text.capitalization.everyfirst = false;
			config.text.capitalization.randomly = false;
			config.text.capitalization.untidy = false;
		} else if ( value === "everyfirst" ) {
			config.text.capitalization.off = false;
			config.text.capitalization.first = false;
			config.text.capitalization.everyfirst = true;
			config.text.capitalization.randomly = false;
			config.text.capitalization.untidy = false;
		} else if ( value === "randomly" ) {
			config.text.capitalization.off = false;
			config.text.capitalization.first = false;
			config.text.capitalization.everyfirst = false;
			config.text.capitalization.randomly = true;
			config.text.capitalization.untidy = false;
		} else if ( value === "untidy" ) {
			config.text.capitalization.off = false;
			config.text.capitalization.first = false;
			config.text.capitalization.everyfirst = false;
			config.text.capitalization.randomly = false;
			config.text.capitalization.untidy = true;
		}
		allDetails.textCapitalization.inUseTextBox.textContent = evt.currentTarget.dataset.text; // update in ui
		tickMarkCorrectOption(evt, "textCapitalization");
		
		// TypingAreaElements.input.focus();

		// debug
		console.log("capitalize:", config.text.capitalization.off, config.text.capitalization.first, config.text.capitalization.everyfirst, config.text.capitalization.randomly, config.text.capitalization.untidy);
	});
});

// details: keyboardLanguage
allDetails.keyboardLanguage.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === config.keyboard.language ) return;

		config.keyboard.language = evt.currentTarget.dataset.value; // update in config
		allDetails.keyboardLanguage.inUseTextBox.textContent = config.keyboard.language; // update in ui
		tickMarkCorrectOption(evt, "keyboardLanguage");
		
		// debug
		console.log(config.keyboard.language);
	});
});

// details: keyboardLayout
allDetails.keyboardLayout.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === config.keyboard.layout.map ) return;

		config.keyboard.layout.map = evt.currentTarget.dataset.value; // update in config
		allDetails.keyboardLayout.inUseTextBox.textContent = config.keyboard.layout.map; // update in ui
		tickMarkCorrectOption(evt, "keyboardLayout");
		
		// debug
		console.log(config.keyboard.layout.map);
	});
});