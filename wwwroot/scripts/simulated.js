let repl;

window.StrudelInit = () => {
    const strudel = document.createElement('strudel-editor');
    document.getElementById('strudel').append(strudel);
    repl = strudel.editor;
    repl.setCode(initcode());
    repl.evaluate();
    repl.setCode(restructured());
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

window.StrudelSetPattern = (index, value) => {
    if(index === 0)
    {
        if(value) repl.setCode(repl.code.replace("_d1:", "d1:"));
        else repl.setCode(repl.code.replace("d1:", "_d1:"));
    }
    if(index === 1)
    {
        if(value) repl.setCode(repl.code.replace("_d2:", "d2:"));
        else repl.setCode(repl.code.replace("d2:", "_d2:"));
    }
    if(index === 2)
    {
        if(value) repl.setCode(repl.code.replace("_d3:", "d3:"));
        else repl.setCode(repl.code.replace("d3:", "_d3:"));
    }
    if(index === 3)
    {
        if(value) repl.setCode(repl.code.replace("_d4:", "d4:"));
        else repl.setCode(repl.code.replace("d4:", "_d4:"));
    }
    repl.evaluate();
    
}

function initcode() {
    return "" +
        "samples('/strudelcycles/simulated.json')\n" +
        "";
}

function scanned() {
    return "" +
        "setcps(170/60/4)\n" +
        "all(x=>x.sometimesBy(0.125,y=>y.brak()))\n" +
        "\n" +
        "d1:stack(\n" +
        "s(\"amen:0\").when(\"<1 0>/16\",x=>x.s(\"amen:1\")).splice(16, \"[0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15]*8?0.125\").legato(1).gain(0.8).cut(1),\n" +
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
        "s(\"sawtooth*8?\").note(\"[0|2|3|5]*8\").transpose(28).legato(2).gain(1).cut(3).lpf(rand.range(25,500)).lpenv(rand.range(1,8)).lpq(15)\n" +
        ").amp(1)._scope()\n" +
        "d3:stack(\n" +
        "s(\"vox*8?\").note(24).legato(1).gain(0.6).slice(16, \"[0|1|2|3|4|5|6|7|9|10|11|12|13|14|15]*8\").comb(1)\n" +
        ").amp(1).delay(0.25).delayt(0.33).delayfb(rand.range(0,0.75)).lock(1).room(0.25).roomsize(0.9)._scope()\n" +
        "d4:stack(\n" +
        "s(\"glitch*8?0.7\").loopAt(8).legato(1).gain(0.4).slice(8, \"[0|1|2|3|4|5|6|7]*8\")\n" +
        ").amp(1).delay(0.25).delayt(0.33).delayfb(rand.range(0,0.75)).lock(1).room(1).roomsize(0.9)._scope()\n" +
        "";
}