const async = require('async'),
	knex = require('knex');

let sqlite = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: "./mydb.sqlite"
	},
	useNullAsDefault: true
});

exports.setupDb = callback => {
	console.log('Starting DB setup');

	async.auto({
		classes: autoCallback => {
			async.waterfall([
				waterfallCb => {
					sqlite.schema
					.dropTableIfExists('classes')
					.then(() => { waterfallCb() });
				},

				waterfallCb => {
					console.log('Creating `classes` table');

					sqlite.schema
					.createTable('classes', (table) => {
						table.increments('id');
						table.string('title');
						table.integer('teacher');
						table.integer('style');
						table.integer('duration');
						table.string('level');
						table.string('description')
						table.string('thumbnailImage');
					})
					.then(() => { waterfallCb() });
				},

				waterfallCb => {
					sqlite('classes')
					.insert([
						// Kathryn
						{ 'title': 'Breath and Movement', 'teacher': 1, 'style': 1, 'duration': 20, level: '1-2', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/17_05_04_KB_030_Vinyasa_Move_Through_It_Level_1_2_7707_05.jpg' },
						{ 'title': 'A Little Yin, A Little Yang', 'teacher': 1, 'style': 1, 'duration': 30, level: '1-2', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/2018_03_22_BudigKathryn_Vinyasa_Flow_Level_2_Yin_Yang_8739_05.jpg' },
						{ 'title': 'Move Through It', 'teacher': 1, 'style': 1, 'duration': 30, level: '2', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/17_05_04_KB_030_Vinyasa_Move_Through_It_Level_1_2_7707_05.jpg'},
						{ 'title': 'This Ship Has Sailed', 'teacher': 1, 'style': 1, 'duration': 75, level: '2', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/16_10_05_KB_075_Vinyasa_Boat_Flow_Level_2_6641_05.jpg'},
						{ 'title': 'Splits!', 'teacher': 1, 'style': 2, 'duration': 15, level: '2-3', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/16_06_07_KB_015_Vinyasa_Full_Splits_Level_2_6069_05.jpg' },
						{ 'title': 'Just Breathe', 'teacher': 1, 'style': 2, 'duration': 5, level: '2', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/15_01_13_KB_005_Meditation_Breathing_Level_2_4545_03.jpg' },
						{ 'title': 'Step Forward Gracefully', 'teacher': 1, 'style': 2, 'duration': 10, level: '1-2', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/14_02_02_KB_010_Prep_The_Step_Level_1_2_3612_05.jpg' },
						{ 'title': 'Shine With the Sun', 'teacher': 1, 'style': 3, 'duration': 5, level: '1', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/2018_03_22_BudigKathryn_Meditation_Level_1_Sun_8741_03.jpg' },
						{ 'title': 'Tend the Garden', 'teacher': 1, 'style': 3, 'duration': 5, level: '1', description: `Utthan pristhasana abhyasa ashwini mudra bij breath exercise of even inhalation and exhalation that involves all respiratory muscles. breathing technique - is the 'alternate nostril breathing' or 'balanced breathing' - balances the energy flow in the channels and purifies the energy channels.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/2018_01_11_BudigKathryn_Meditation_TendGarden_8496_03.jpg' },

						// Sara
						{ 'title': 'Attention On Intention', 'teacher': 2, 'style': 3, 'duration': 5, level: '1-2', description: `Four limbed staff pose cow face pose king pigeon pose ear pressure pose marichi's pose i, sage twist pose cat pose peacock pose lotus pose intense side stretch pose, pyramid pose bridge pose reclining bound angle pose, goddess pose supine spinal twist reclining hero pose upward salute, raised hands pose side plank pose reverse warrior pose warrior iii pose.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/10_27_12_KB_090_All_Around_Flow_Level_2_3_2574_05.jpg' },
						{ 'title': 'Breath Cleanse', 'teacher': 2, 'style': 3, 'duration': 10, level: '1', description: `Four limbed staff pose cow face pose king pigeon pose ear pressure pose marichi's pose i, sage twist pose cat pose peacock pose lotus pose intense side stretch pose, pyramid pose bridge pose reclining bound angle pose, goddess pose supine spinal twist reclining hero pose upward salute, raised hands pose side plank pose reverse warrior pose warrior iii pose.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/04_27_13_KB_010_Heart_Healing_Level_1_3084_Thumb_03.jpg' },
						{ 'title': 'Don\'t Cramp My Style', 'teacher': 2, 'style': 1, 'duration': 30, level: '2', description: `Four limbed staff pose cow face pose king pigeon pose ear pressure pose marichi's pose i, sage twist pose cat pose peacock pose lotus pose intense side stretch pose, pyramid pose bridge pose reclining bound angle pose, goddess pose supine spinal twist reclining hero pose upward salute, raised hands pose side plank pose reverse warrior pose warrior iii pose.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/2018_05_17_ClarkSara_Vinyasa_CrampMyStyle_8877_05.jpg' },
						{ 'title': 'Just Coast', 'teacher': 2, 'style': 2, 'duration': 45, level: '2-3', description: `Four limbed staff pose cow face pose king pigeon pose ear pressure pose marichi's pose i, sage twist pose cat pose peacock pose lotus pose intense side stretch pose, pyramid pose bridge pose reclining bound angle pose, goddess pose supine spinal twist reclining hero pose upward salute, raised hands pose side plank pose reverse warrior pose warrior iii pose.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/2018_05_17_ClarkSara_Vinyasa_JustCoast_8876_05.jpg' },
						{ 'title': 'Steady Does It', 'teacher': 2, 'style': 2, 'duration': 30, level: '2', description: `Four limbed staff pose cow face pose king pigeon pose ear pressure pose marichi's pose i, sage twist pose cat pose peacock pose lotus pose intense side stretch pose, pyramid pose bridge pose reclining bound angle pose, goddess pose supine spinal twist reclining hero pose upward salute, raised hands pose side plank pose reverse warrior pose warrior iii pose.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/17_06_11_SCL_030_Vinyasa_Steady_Level_2_7907_05.jpg' },
						{ 'title': 'Hollowback Hang', 'teacher': 2, 'style': 2, 'duration': 20, level: '3', description: `Four limbed staff pose cow face pose king pigeon pose ear pressure pose marichi's pose i, sage twist pose cat pose peacock pose lotus pose intense side stretch pose, pyramid pose bridge pose reclining bound angle pose, goddess pose supine spinal twist reclining hero pose upward salute, raised hands pose side plank pose reverse warrior pose warrior iii pose.`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/17_06_10_SCL_020_Vinyasa_Hollowback_Level_1_2_7905_05.jpg' },

						// Dice
						{ 'title': 'Hip Mobility', 'teacher': 3, 'style': 2, duration: 10, level: '1-2', description: `Happy baby pose crane pose, crow pose cobra pose table to child pose sage koundinya i pose one-legged king pigeon pose cow face pose heron pose garland pose equal standing pose bridge pose reclining bound angle pose, goddess pose conqueror breath standing forward bend extended triangle pose warrior ii pose`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/16_03_14_DK_015_Hatha_Hip_Mobility_Level_1_2_5810_05.jpg' },
						{ 'title': 'Natural Caffeine Flow', 'teacher': 3, 'style': 1, duration: 45, level: '2', description: `Happy baby pose crane pose, crow pose cobra pose table to child pose sage koundinya i pose one-legged king pigeon pose cow face pose heron pose garland pose equal standing pose bridge pose reclining bound angle pose, goddess pose conqueror breath standing forward bend extended triangle pose warrior ii pose`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/2018_02_22_Iida-KleinDice_GeneralLibrary_CaffeineFlow_8631_05.jpg' },
						{ 'title': 'Short and Sweet Home Practice', 'teacher': 3, 'style': 1, duration: 20, level: '2', description: `Happy baby pose crane pose, crow pose cobra pose table to child pose sage koundinya i pose one-legged king pigeon pose cow face pose heron pose garland pose equal standing pose bridge pose reclining bound angle pose, goddess pose conqueror breath standing forward bend extended triangle pose warrior ii pose`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/17_02_23_DK_020_Vinyasa_Challenge_Home_Flow_Level_3_7324_05.jpg' },
						{ 'title': 'Post-Golf Release', 'teacher': 3, 'style': 2, duration: 10, level: '1', description: `Happy baby pose crane pose, crow pose cobra pose table to child pose sage koundinya i pose one-legged king pigeon pose cow face pose heron pose garland pose equal standing pose bridge pose reclining bound angle pose, goddess pose conqueror breath standing forward bend extended triangle pose warrior ii pose`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/17_02_23_DK_010_Hatha_Post_Golf_Level_1_7326_05.jpg' },
						{ 'title': 'Surya Namaskara C 2.0', 'teacher': 3, 'style': 1, duration: 30, level: '2-3', description: `Happy baby pose crane pose, crow pose cobra pose table to child pose sage koundinya i pose one-legged king pigeon pose cow face pose heron pose garland pose equal standing pose bridge pose reclining bound angle pose, goddess pose conqueror breath standing forward bend extended triangle pose warrior ii pose`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/n2_15_10_15_DK_030_Vinyasa_Short_Surya_Level_2_3_5420_05.jpg' },
						{ 'title': 'Let\'s Get Grounded', 'teacher': 3, 'style': 2, duration: 30, level: '1-2', description: `Happy baby pose crane pose, crow pose cobra pose table to child pose sage koundinya i pose one-legged king pigeon pose cow face pose heron pose garland pose equal standing pose bridge pose reclining bound angle pose, goddess pose conqueror breath standing forward bend extended triangle pose warrior ii pose`, 'thumbnailImage': 'https://d23upc69c85y6r.cloudfront.net/720/11_05_22_HW_005_Grounding_Meditation_Post_Travel_1213_01.jpg' }
					])
					.then(() => { waterfallCb() });
				}
			], autoCallback);
		},

		teachers: autoCallback => {
			async.waterfall([
				waterfallCb => {
					sqlite.schema
					.dropTableIfExists('teachers')
					.then(() => { waterfallCb() });
				},

				waterfallCb => {
					console.log('Creating `teachers` table');

					sqlite.schema
					.createTable('teachers', (table) => {
						table.increments('id');
						table.string('name');
					})
					.then(() => { waterfallCb() });
				},

				waterfallCb => {
					sqlite('teachers')
					.insert([
						{ id: 1, name: 'Kathryn Budig' },
						{ id: 2, name: 'Sara Clark' },
						{ id: 3, name: 'Dice Iida-Klein' }
					])
					.then(() => { waterfallCb() });
				}
			], autoCallback);
		},

		styles: autoCallback => {
			async.waterfall([
				waterfallCb => {
					sqlite.schema
					.dropTableIfExists('styles')
					.then(() => { waterfallCb() });
				},

				waterfallCb => {
					console.log('Creating `styles` table');

					sqlite.schema
					.createTable('styles', (table) => {
						table.increments('id');
						table.string('name');
					})
					.then(() => { waterfallCb() });
				},

				waterfallCb => {
					sqlite('styles')
					.insert([
						{ id: 1, name: 'Vinyasa Flow' },
						{ id: 2, name: 'Hatha' },
						{ id: 3, name: 'Meditation' }
					])
					.then(() => { waterfallCb() });
				}
			], autoCallback);
		},
	},
	// autoCallback
	err => {
		console.log('DB setup complete\n');

		if (callback) {
			if (err) return callback(err);
			return callback(null, sqlite);
		}
	});
};