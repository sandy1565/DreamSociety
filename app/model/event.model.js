module.exports = (sequelize, Sequelize) => {
    const EventTable = sequelize.define('event_master', {
        eventId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        eventName: {
            type: Sequelize.STRING
        },
        eventType: {
            type: Sequelize.STRING
        },
        startDate: {
            type:Sequelize.DATE
        },
        endDate: {
            type:Sequelize.DATE
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
    }, {
        freezeTableName: true
    });

    return EventTable;
}