import { Test } from "@nestjs/testing"
import { AppModule } from "../../app.module"
import { UsersService } from "../users.service";
jest.setTimeout(30000);
describe('Users service integration test', () => {
    let userService: UsersService;
    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        userService = moduleRef.get(UsersService);
    });

    describe('createPaymentMethod()', () => {
        it('Create a payment method', async () => {
            const createData = { email: 'santiagoboe09@gmail.com', full_name: 'Santiago Test' }
            const data = await userService.createPaymentMethod(createData);
            expect(data.email).toBe(createData.email)
            expect(data.full_name).toBe(createData.full_name)
        })
    })


})