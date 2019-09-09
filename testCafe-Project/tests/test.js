import {t} from 'testcafe';
import config from '../../config.json'

fixture `Sample Tests`
    .page`${config.baseUrl}`;

    test('My First Test', async t => {
        await t.navigateTo("https://cnn.com");
    })
