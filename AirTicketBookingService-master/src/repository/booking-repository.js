const { StatusCodes } = require('http-status-codes');
const { Booking } = require('../models');
const {AppError, ValidationError} = require('../utils/errors/index');

class BookingRepository {
    async create(data) {
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError', 
                'Cannot create booking', 
                'There was some issue creating the booking, please try again later', 
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update(bookingId, data) {
        try {
            await Booking.update(data, {
                where: {
                    id: bookingId,
                },
            });
            const booking = await Booking.findByPk(bookingId); 
            return booking;
        } catch (error) {            
            if (error.name === 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError', 
                'Cannot update booking', 
                'There was some issue updating the booking, please try again later', 
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = BookingRepository;