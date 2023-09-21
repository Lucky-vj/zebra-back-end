const { Mongoose } = require('mongoose')
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TradeSchema = new mongoose.Schema(
    {
        Pair: {
            type: String,
            required: true
        },
        Amount: {
            type: String,
            required: true
        },
        Price: {
            type: String,
            required: true
        },
        Trade_type: {
            type: String,
            required: true
        },
        Trade_At: {
            type: String,
            required: true
        },
        User_Address: {
            type: String,
            required: true
        },
        Coin_name: {
            type: String,
            required: true
        },
        Trade_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'stakingPairs',
            default: ""
        },
        status: {
            type: Number,
            default: 0
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
TradeSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Tradehistory', TradeSchema)
