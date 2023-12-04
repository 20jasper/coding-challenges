use day_4::run;

fn main() {
    // Run registered benchmarks.
    divan::main();
}

#[divan::bench]
fn stuff() {
    let _ = run();
}
