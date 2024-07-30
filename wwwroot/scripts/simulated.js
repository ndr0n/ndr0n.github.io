let repl;

window.StrudelInit = () => {
    const strudel = document.createElement('strudel-editor');
    document.getElementById('strudel').append(strudel);
    repl = strudel.editor;
    repl.setCode(initcode());
    repl.evaluate();
    repl.setCode(scanned());
    repl.stop();
};

window.StrudelClear = () => {
    repl.stop();
    repl.element.remove();
}

window.StrudelPlay = () => {
    repl.evaluate();
}

window.StrudelStop = () => {
    repl.stop();
}

window.StrudelSetCode = (track) => {
    if(track === "scanned") repl.setCode(scanned());
    else if (track === "restructured") repl.setCode(restructured());
    else repl.setCode(restructured());
}

function initcode() {
    return "" +
        "samples('/strudelcycles/simulated.json')\n" +
        "";
}

function restructured() {
    return "" +
        "setcps(170/60/4)\n" +
        "all(x=>x.sometimesBy(0.125,y=>y.brak()))\n" +
        "\n" +
        "d1:stack(\n" +
        "s(\"bd\").struct(\"[t ~ ~ t ~ ~ ~ ~]*1\").legato(3).gain(1).cut(1),\n" +
        "s(\"sd\").struct(\"[~ ~ ~ ~ t ~ ~ ~]*1\").legato(0.75).gain(0.7).cut(1),\n" +
        "s(\"hh\").struct(\"[t t t t]*1\").legato(0.125).gain(0.7),\n" +
        "s(\"fh\").struct(\"[~ ~ t ~]*2\").legato(0.25).gain(0.45)\n" +
        ").amp(1)._scope()\n" +
        "d2:stack(\n" +
        "s(\"sawtooth*8?\").note(\"[0|2|3|5]*8\").transpose(28).legato(2).gain(1.25).cut(3).lpf(rand.range(25,500)).lpenv(rand.range(1,8)).lpq(15)\n" +
        ").amp(1)._scope()\n" +
        "d3:stack(\n" +
        "s(\"vox*8?\").note(24).legato(1).gain(0.6).slice(16, \"[0|1|2|3|4|5|6|7|9|10|11|12|13|14|15]*8\").comb(1)\n" +
        ").amp(1).delay(0.25).delayt(0.33).delayfb(rand.range(0,0.75)).lock(1).room(0.25).roomsize(0.9)._scope()\n" +
        "d4:stack(\n" +
        "s(\"glitch*8?0.7\").loopAt(8).legato(1).gain(0.5).slice(8, \"[0|1|2|3|4|5|6|7]*8\")\n" +
        ").amp(1).delay(0.25).delayt(0.33).delayfb(rand.range(0,0.75)).lock(1).room(1).roomsize(0.9)._scope()\n" +
        "";
}

function scanned() {
    return "" +
        "setcps(170/60/4)\n" +
        "all(x=>x.sometimesBy(0.125,y=>y.brak()))\n" +
        "\n" +
        "d1:stack(\n" +
        "s(\"amen:1\").splice(16, \"[0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15]*8?0.125\").legato(1).gain(0.8).cut(1),\n" +
        "s(\"hh\").struct(\"[t t t t]*4\").legato(0.125).gain(0.6),\n" +
        "s(\"bip\").note(12).struct(\"[t t t t]*4?0.7\").legato(0.25).gain(0.15)\n" +
        ").amp(1)._scope()\n" +
        "d2:stack(\n" +
        "s(\"neuro\").note(\"[36 ~]/2\").slice(8, \"[0|1|2|3|4|5|6|7]\").legato(1).gain(1.25).cut(3)\n" +
        ").amp(1).room(0.25).roomsize(0.9)._scope()\n" +
        "d3:stack(\n" +
        "s(\"piano\").slice(16, \"[[0|1|2|3|4|5|6|7|9|10|11|12|13|14|15] ~]/2\").legato(1).gain(1)\n" +
        ").amp(1).delay(0.25).delayt(0.33).delayfb(rand.range(0,0.75)).lock(1).room(0.25).roomsize(0.9)._scope()\n" +
        "d4:stack(\n" +
        "s(\"pad\").note(\"[24 ~]/2\").slice(16, \"[[0|1|2|3|4|5|6|7|9|10|11|12|13|14|15] ~]/2\").legato(1).gain(1.125)\n" +
        ").amp(1).delay(0.25).delayt(0.33).delayfb(rand.range(0,0.75)).lock(1).room(1).roomsize(0.9)._scope()\n" +
        "";
}