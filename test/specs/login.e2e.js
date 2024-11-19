describe("login test", () => {
    beforeEach(async() => {
        await $('//*[@text="Allow"]').click();
        await $("~Login").click();
    });
    it("inicio de sesion correcto", async () => {
        await $('//*[@text="Email o número de móvil"]').setValue("user@email.com");
        await $('//*[@text="Contraseña"]').setValue("password");
        await $('//*[@content-desc="Acceder"]').click();
        await browser.pause(5000); 
        await $('//*[@text="Valor de activos digitales"]').isExisting();
        //const existe = await texto.isExisting();
        //expect(existe).to.be.true;
    })
})