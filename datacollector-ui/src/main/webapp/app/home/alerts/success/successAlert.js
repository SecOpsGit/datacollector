/*
 * Copyright 2017 StreamSets Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Controller for Success Alert.
 */

angular
  .module('dataCollectorApp.home')
  .controller('SuccessAlertController', function ($scope, $timeout) {

    angular.extend($scope, {
      /**
       * Returns Message of the alert. Also clears the message after 5 seconds.
       * @param alert
       * @param alertList
       * @param index
       * @returns {*}
       */
      getAlertMessage: function(alert, alertList, index) {
        $timeout(function() {
          if(alertList.length > index) {
            $scope.removeAlert(alertList, index);
          }
        }, 4000);

        return alert.message;
      },

      /**
       * Remove Message.
       *
       * @param alertList
       * @param index
       *
       */
      removeAlert: function(alertList, index) {
        alertList.splice(index, 1);
      }
    });
  });