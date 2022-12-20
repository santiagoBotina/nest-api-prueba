import { Test } from "@nestjs/testing"
import { AppModule } from "../../app.module"
import { AuthService } from "../auth.service";
jest.setTimeout(30000);
describe('Users service integration test', () => {
    let authService: AuthService;
    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        authService = moduleRef.get(AuthService);
    });

    describe('signUp()', () => {
        it('Should create a new user', async () => {
            const createData = { email: 'santiagoboe10@gmail.com', full_name: 'Santiago Test', password: 'Santiago' }
            const data = await authService.signUp(createData)
            expect(data.email).toBe(createData.email)
            expect(data.full_name).toBe(createData.full_name)
        })
    })


})