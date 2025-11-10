import * as hz from 'horizon/core';
import { NpcPlayer, Npcs } from "@meta/npc";

// --- Configuration ---
const HAWTHORNE_NAME = "Mr. Hawthorne"; 
const HAWTHORNE_VOICE = "FormalMaleVoice_02"; // Ensure this matches the voice ID you chose in the Character Builder

// --- Static Dialogue (The Killer's Lies) ---
const A1_LIE = "I was at the bank, settling some... investments. I left there around 10:45 AM. I have a receipt, somewhere.";
const A2_LIE = "No, absolutely nothing. I was focusing on my errands. The whole morning was... quiet. Too quiet, perhaps.";
const A3_LIE = "She was a dear friend! A sister to me. We often spoke about money and her investments. I am devastated by this loss.";
const A4_LIE = "No. Nothing at all. My property is meticulously clean. I would have noticed anything out of place. Why do you ask about objects?";

// --- NPC Instance Variable ---
let hawthorne: NpcPlayer | null = null;


// --- Component Class (Container for the Script) ---
class Hawthorne_Interrogation_Script extends hz.Component<typeof Hawthorne_Interrogation_Script> {
    static propsDefinition = {};

    // Initialization is optional here, but good practice
    start() {
        // Find the NPC when the script starts
        hawthorne = Npcs.getNpcPlayerByName(HAWTHORNE_NAME);
        if (!hawthorne) {
            console.error(`NPC with name ${HAWTHORNE_NAME} not found on world start!`);
        }
    }

    // NOTE: This class definition is here, but the speakAnswer function 
    // needs to be exported *outside* the class to be callable by UI buttons.
}
hz.Component.register(Hawthorne_Interrogation_Script);


// --- Callable Function for UI Buttons (EXPORTED) ---
// This function can be called by UI elements (buttons) using the Run Script Function feature.
export function speakAnswer(answerId: number) {
    // If the NPC wasn't found in start(), try again here (safeguard)
    if (!hawthorne) {
        hawthorne = Npcs.getNpcPlayerByName(HAWTHORNE_NAME);
        if (!hawthorne) {
            console.error(`NPC with name ${HAWTHORNE_NAME} not found during interaction!`);
            return;
        }
    }

    let response = "";
    // Use the argument (1, 2, 3, or 4) passed from the UI button to select the static answer
    switch (answerId) {
        case 1:
            response = A1_LIE;
            // OPTIONAL: NPC can "ask" the question before answering
            hawthorne.speak("My whereabouts? A fair question.", { voice: HAWTHORNE_VOICE }); 
            break;
        case 2:
            response = A2_LIE;
            hawthorne.speak("What I heard? Nothing of interest.", { voice: HAWTHORNE_VOICE }); 
            break;
        case 3:
            response = A3_LIE;
            hawthorne.speak("Our relationship was purely sisterly.", { voice: HAWTHORNE_VOICE }); 
            break;
        case 4:
            response = A4_LIE;
            hawthorne.speak("Objects? What objects are you referring to?", { voice: HAWTHORNE_VOICE }); 
            break;
        default:
            response = "I do not understand that line of questioning.";
            break;
    }

    // Command the NPC to speak the response using the defined voice
    // The response is printed in the chat box and spoken aloud via TTS.
    hawthorne.speak(response, { voice: HAWTHORNE_VOICE });
}